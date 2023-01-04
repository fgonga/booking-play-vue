package repositores.entities;

import controllers.api.BaseController;
import models.User;

public class AuthRepository {
    public static User login(String username, String password) {
        return User.find("byUsernameAndPassword", username, password).first();
    }
    public static Object getUserConected(){
        String username = BaseController.getSession().get("user");
        if(username != null) {
            return User.find("byUsername", username).first();
        }
        return null;
    }
}
