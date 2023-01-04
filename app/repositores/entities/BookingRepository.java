package repositores.entities;
import models.Booking;
import models.Hotel;
import models.User;

import java.util.Date;

public class BookingRepository extends AbstractRepository {


    public static void cancelBooking(Long id) {
        /*Booking booking = Booking.findById(id);
        booking.delete();
        flash.success("Booking cancelled for confirmation number %s", booking.id);
        index();*/
    }

    public static Object confirmBooking(Long hotel_id, Booking booking, User user) {
        booking.hotel = Hotel.findById(hotel_id);
        booking.user = user;
        booking.create();
        return booking;
    }

}


