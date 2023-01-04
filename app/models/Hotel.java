package models;

import play.data.validation.MaxSize;
import play.data.validation.MinSize;
import play.data.validation.Required;
import play.db.jpa.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.math.BigDecimal;

@Entity
public class Hotel extends Model {

    @Required
    @MaxSize(50)
    public String name;

    @MaxSize(100)
    public String address;

    @Required
    @MaxSize(40)
    public String city;

    @Required
    @MaxSize(6)
    @MinSize(2)
    public String state;

    @Required
    @MaxSize(6)
    @MinSize(5)
    public String zip;

    @Required
    @MaxSize(40)
    @MinSize(2)
    public String country;

    @Column(precision=6, scale=2)
    public BigDecimal price;

    public String toString() {
        return "Hotel(" + name + "," + address + "," + city + "," + zip + ")";
    }

}
