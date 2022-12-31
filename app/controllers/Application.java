package controllers;

import models.User;
import play.data.validation.Valid;
import play.mvc.Before;

public class Application extends BaseController {

    public static void index() {
        render();
    }


}
