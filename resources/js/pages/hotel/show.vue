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

      <p class="">
        <strong>Check In Date:</strong> <input type="text" size="10" name="booking.checkinDate" class="datepicker hasDatepicker" value="" id="dp1672488097065"> *
        <span class="error"></span>
      </p>
      <p class="">
        <strong>Check Out Date:</strong> <input type="text" size="10" name="booking.checkoutDate" class="datepicker hasDatepicker" value="" id="dp1672488097066"> *
        <span class="error"></span>
      </p>
      <p>
        <strong>Room preference:</strong>

        <select name="booking.beds" size="1">
          <option value="1">One king-size bed </option>
          <option value="2">Two double beds </option>
          <option value="3">Three beds </option>
        </select>`

      </p>
      <p>
        <strong>Smoking preference:</strong>
        <input type="radio" name="booking.smoking" value="true"> Smoking
        <input type="radio" name="booking.smoking" value="false" checked=""> Non smoking
      </p>
      <p class="">
        <strong>Credit Card #:</strong> <input type="text" name="booking.creditCard" size="16" value=""> *
        <span class="error"></span>
      </p>
      <p class="">
        <strong>Credit Card Name:</strong> <input type="text" name="booking.creditCardName" size="16" value=""> *
        <span class="error"></span>
      </p>
      <p>
        <strong>Credit Card Expiry:</strong>

        <select name="booking.creditCardExpiryMonth" size="1">
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

        <select name="booking.creditCardExpiryYear" size="1">
          <option :value="2008">2008 </option>
          <option :value="2009">2009</option>
          <option :value="2010">2010</option>
          <option :value="2011">2011 </option>
          <option :value="2012">2012 </option>
        </select>
      </p>



      <p class="buttons" v-if="!book_hotel">
        <button @click="book_hotel = true">Book Hotel</button>
        <router-link :to="{name:'hotel.index'}" > Back to search</router-link>
      </p>
      <p class="buttons" v-if="book_hotel">

        <button @click="booking = true">Proceed</button> <a href="#" @click="book_hotel = false" > Cancel</a>
      </p>
    </div>
  </div>
</template>

<script>
import HotelService from "~/services/HotelService";
export default {
  name: "show",
  middleware: "auth",
  data() {
    return {
      hotel:null,
      busy:false,
      book_hotel:false,
      booking:null
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

    }
  }
}
</script>

<style scoped>

</style>
