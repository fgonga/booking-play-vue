package models;

import play.data.validation.Match;
import play.data.validation.MaxSize;
import play.data.validation.MinSize;
import play.data.validation.Required;
import play.db.jpa.Model;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.util.Date;

@Entity
public class Booking extends Model {

    @Required
    @ManyToOne
    public User user;

    @Required
    @ManyToOne
    public Hotel hotel;

    @Required
    @Temporal(TemporalType.DATE)
    public Date checkinDate;

    @Required
    @Temporal(TemporalType.DATE)
    public Date checkoutDate;

    @Required(message="Credit card number is required")
    @Match(value="^\\d{16}$", message="Credit card number must be numeric and 16 digits long")
    public String creditCard;

    @Required(message="Credit card name is required")
    @MinSize(value=3, message="Credit card name is required")
    @MaxSize(value=70, message="Credit card name is required")
    public String creditCardName;
    public int creditCardExpiryMonth;
    public int creditCardExpiryYear;
    public boolean smoking;
    public int beds;

    public Booking(Hotel hotel, User user) {
        this.hotel = hotel;
        this.user = user;
    }

    public Booking(Date checkinDate, Date checkoutDate, String creditCard, String creditCardName, int creditCardExpiryMonth, int creditCardExpiryYear, boolean smoking, int beds) {
        this.checkinDate = checkinDate;
        this.checkoutDate = checkoutDate;
        this.creditCard = creditCard;
        this.creditCardName = creditCardName;
        this.creditCardExpiryMonth = creditCardExpiryMonth;
        this.creditCardExpiryYear = creditCardExpiryYear;
        this.smoking = smoking;
        this.beds = beds;
    }



    public BigDecimal getTotal() {
        return hotel.price.multiply( new BigDecimal( getNights() ) );
    }

    public int getNights() {
        return (int) ( checkoutDate.getTime() - checkinDate.getTime() ) / 1000 / 60 / 60 / 24;
    }

    public String getDescription() {
        DateFormat df = DateFormat.getDateInstance(DateFormat.MEDIUM);
        return hotel==null ? null : hotel.name +
                ", " + df.format( checkinDate ) +
                " to " + df.format( checkoutDate );
    }

    public String toString() {
        return "Booking(" + user + ","+ hotel + ")";
    }

}
