package repositores.entities;
import models.Hotel;
import play.exceptions.UnexpectedException;

import java.util.List;
public  class  HotelsRepository extends AbstractRepository{

    public static List<Hotel> index(String search, Integer size, Integer page){
        List<Hotel> hotels = null;
        page = page != null ? page : 1;
        size = size != null ? size : 8;
        search = search != null ? search : "";
        if(search.trim().length() == 0) {
            hotels = Hotel.all().fetch(page, size);
        } else {
            search = search.toLowerCase();
            hotels = Hotel.find("lower(name) like ?1 OR lower(city) like ?2", "%"+search+"%", "%"+search+"%")
                    .fetch(page, size);
        }
        return hotels;
    }

    public static Hotel show(Long id) {
        return Hotel.findById(id);
    }
}
