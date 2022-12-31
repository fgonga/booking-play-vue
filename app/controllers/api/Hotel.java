package controllers.api;
import controllers.Application;
import play.mvc.Before;
import repositores.entities.HotelsRepository;
public class Hotel extends BaseApiController {
    @Before
    static void checkUser() {
        if(connected() == null) {
            sendError(401,"Please login ");
        }
    }

    public static void index(String search, Integer size, Integer page) {
        sendSuccess(HotelsRepository.index(search,size,page));
    }
    public static void show(Long id){
        sendSuccess(HotelsRepository.show(id));
    }
}

