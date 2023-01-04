package controllers.api;
import models.Booking;
import play.data.validation.Validation;
import repositores.entities.BookingRepository;

import java.util.Date;

public class BookingController extends BaseController {

    public static void store(Long hotel_id, Date checkinDate, Date checkoutDate, String creditCard, String creditCardName, int creditCardExpiryMonth, int creditCardExpiryYear, boolean smoking, int beds) {
        Booking booking = new Booking(checkinDate, checkoutDate, creditCard, creditCardName, creditCardExpiryMonth, creditCardExpiryYear, smoking, beds);
        validation.valid(booking);
        // Errors or revise
        if(Validation.hasErrors() || params.get("revise") != null) {
            sendError(400,"Dados incorrectos");
        }
        sendSuccess(BookingRepository.confirmBooking(hotel_id, booking, connected()));
    }

    public static void cancelBooking(Long id) {
    }
}
