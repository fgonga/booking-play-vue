package controllers;

import models.User;
import play.data.validation.Valid;
import play.mvc.Before;

public class Application extends BaseController {

    @Before
    static void addUser() {
        User user = connected();
        if(user != null) {
            renderArgs.put("user", user);
        }
    }

    public static void index() {
        render();
    }

    static User connected() {
        if(renderArgs.get("user") != null) {
            return renderArgs.get("user", User.class);
        }
        String username = session.get("user");
        if(username != null) {
            return User.find("byUsername", username).first();
        }
        return null;
    }

    // ~~



    public static void register() {
        render();
    }

    public static void saveUser(@Valid User user, String verifyPassword) {
        validation.required(verifyPassword);
        validation.equals(verifyPassword, user.password).message("Your password doesn't match");
        if(validation.hasErrors()) {
            render("@register", user, verifyPassword);
        }
        user.create();
        session.put("user", user.username);
        flash.success("Welcome, " + user.name);
        //Hotels.index();
    }

    public static void login(String username, String password) {
        User user = User.find("byUsernameAndPassword", username, password).first();

        if (user == null){
            sendError(422,"The given data was invalid.");
        }

        session.put("user", user.username);
        sendSuccess(user,"success");
    }

    public static void logout() {
        session.clear();
        index();
    }

}
