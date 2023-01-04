package controllers.api;

import play.mvc.Before;
import repositores.entities.HotelRepository;
public class HotelController extends BaseController {
    @Before
    static void checkUser() {
        if(connected() == null) {
            sendError(401,"Please login ");
        }
    }

    public static void index(String search, Integer size, Integer page) {
        sendSuccess(HotelRepository.index(search,size,page));
    }
    public static void show(Long id){
        sendSuccess(HotelRepository.show(id));
    }
}

