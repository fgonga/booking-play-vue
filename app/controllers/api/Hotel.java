package controllers.api;
import controllers.Application;
import play.mvc.Before;
import repositores.entities.HotelsRepository;
public class Hotel extends BaseApiController {
    @Before
    static void checkUser() {
        if(connected() == null) {
            flash.error("Please log in first");
            Application.index();
        }
    }

    public static void index(String search, Integer size, Integer page) {
        sendSuccess(HotelsRepository.index(search,size,page));
    }
}

