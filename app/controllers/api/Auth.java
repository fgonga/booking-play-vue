package controllers.api;
import models.User;
import repositores.entities.AuthRepository;
public class Auth extends BaseApiController {

    public static void login(String username, String password) {
        User user = AuthRepository.login(username,password);
        if (user != null){
            session.put("user", user.username);
            sendSuccess(user,"success");
        }
        sendError(422,"The given data was invalid.");
    }
}

