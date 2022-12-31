package repositores.entities;

import models.User;

public class AuthRepository {
    public static User login(String username, String password) {
        return User.find("byUsernameAndPassword", username, password).first();

    }
}
