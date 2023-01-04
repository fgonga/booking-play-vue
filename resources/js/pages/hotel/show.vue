<template>
  <div>
    <h1>View hotel</h1>
    <p v-show="busy" style="text-align: center">Carregando...</p>
    <div v-if="hotel" class="form">
      <p>
        <strong>Name:</strong> {{hotel.name}}
      </p>
      <p>
        <strong>Address:</strong> {{hotel.address}}
      </p>
      <p>
        <strong>City:</strong> {{hotel.city}}
      </p>
      <p>
        <strong>State:</strong> {{hotel.state}}
      </p>
      <p>
        <strong>Zip:</strong> {{hotel.zip}}
      </p>
      <p>
        <strong>Country:</strong> {{hotel.country}}
      </p>
      <p>
        <strong>Nightly rate:</strong> {{hotel.price}}
      </p>
      <div v-if="book_hotel">

        <p class="">
          <strong>Check In Date:</strong> <input v-model="booking.checkinDate" type="date" size="10" name="booking.checkinDate" class="datepicker hasDatepicker" value="" id="dp1672488097065"> *
          <span class="error"></span>
        </p>
        <p class="">
          <strong>Check Out Date:</strong> <input v-model="booking.checkoutDate" type="date" size="10" name="booking.checkoutDate" class="datepicker hasDatepicker" value="" id="dp1672488097066"> *
          <span class="error"></span>
        </p>
        <p style="margin-lef">
          <strong>Room preference:</strong>

          <select v-model="booking.beds" name="booking.beds" size="1">
            <option value="1">One king-size bed </option>
            <option value="2">Two double beds </option>
            <option value="3">Three beds </option>
          </select>`

        </p>
        <p>
          <strong>Smoking preference:</strong>
          <input v-model="booking.smoking" type="radio" name="booking.smoking" value="true"> Smoking
          <input v-model="booking.smoking" type="radio" name="booking.smoking" value="false" checked=""> Non smoking
        </p>
        <p class="">
          <strong>Credit Card #:</strong> <input type="text" v-model="booking.creditCard" name="booking.creditCard" size="16" value=""> *
          <span class="error"></span>
        </p>
        <p class="">
          <strong>Credit Card Name:</strong> <input type="text"  v-model="booking.creditCardName" name="booking.creditCardName" size="16" value=""> *
          <span class="error"></span>
        </p>
        <p>
          <strong>Credit Card Expiry:</strong>

          <select v-model="booking.creditCardExpiryMonth" name="booking.creditCardExpiryMonth" size="1">
            <option :value="1">Jan </option>
            <option :value="2">Feb</option>
            <option :value="3">Mar </option>
            <option :value="4">Apr </option>
            <option :value="5">May </option>
            <option :value="6">Jun</option>
            <option :value="7">Jul</option>
            <option :value="8">Aug</option>
            <option :value="9">Sep</option>
            <option :value="10">Oct</option>
            <option :value="11">Nov </option>
            <option :value="112">Dec </option>
          </select>

          <select v-model="booking.creditCardExpiryYear" name="booking.creditCardExpiryYear" size="1">
            <option :value="2022">2022 </option>
            <option :value="2023">2023 </option>
            <option :value="2024">2024 </option>
            <option :value="2025">2025 </option>
            <option :value="2026">2026 </option>
            <option :value="2027">2027 </option>
            <option :value="2028">2028 </option>
            <option :value="2029">2029 </option>
            <option :value="2030">2030 </option>
          </select>
        </p>

      </div>

      <p class="buttons" v-if="!book_hotel">
        <button @click="book_hotel = true">Book Hotel</button>
        <router-link :to="{name:'hotel.index'}" > Back to search</router-link>
      </p>
      <p class="buttons" v-if="book_hotel">
        <button @click="handleBook">Proceed</button> <a href="#" @click="book_hotel = false" > Cancel</a>
      </p>
    </div>
  </div>
</template>

<script>
import HotelService from "~/services/HotelService";
import BookingService from "~/services/BookingService";

export default {
  name: "show",
  middleware: "auth",
  data() {
    return {
      hotel:null,
      busy:false,
      book_hotel:false,
      booking: {
        beds:null,
        smoking:null,
        creditCard:null,
        creditCardName:null,
        creditCardExpiryMonth:null,
        creditCardExpiryYear:null,
        hotel_id:null,
        checkinDate:null,
        checkoutDate:null
      }
    };
  },
  created() {
    this.create();
  },
  methods: {
    create(){
      const id = this.$router.history.current.params.id
      if (id) {
        this.busy = true
        HotelService.show(id).then(response => {
          this.busy = false
          this.hotel = response.data.data
        }).catch(error =>{
          this.busy = false
        })
      }
    },
    handleBook(){
      this.booking.hotel_id = this.hotel.id
      BookingService.store(this.booking).then(response => {
        this.busy = false
        console.log(response.data)
      }).catch(error =>{
        this.busy = false
      })
    }
  }
}
</script>
