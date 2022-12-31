<template>
  <div>
    <h1>Search Hotels</h1>
    <p>
      <input v-model="search" type="text" id="search" size="30">
      <button @click="handleFindHotels" type="submit" id="submit">Find Hotels</button>
      <br>
      Maximum results:
      <select v-model="params.size" id="size">
        <option :value="8">8</option>
        <option :value="10">10</option>
        <option :value="20">20</option>
      </select>
    </p>
    <table v-if="hotels.length">
      <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>City, State</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody v-for="hotel in hotels">
      <tr>
        <td>{{hotel.name}}</td>
        <td>{{hotel.address}}</td>
        <td>{{hotel.city}}, {{hotel.state}}, {{hotel.country}}</td>
        <td>
        </td>
      </tr>
      </tbody>
    </table>
    <template v-else>
      <p>
        No Hotels Found
      </p>
    </template>

    <h1>Current Hotel Bookings</h1>

    <table v-if="bookings.length">
      <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>City, State</th>
        <th>Check in</th>
        <th>Check out</th>
        <th>Confirmation number</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody v-for="booking in bookings">
      <tr>
        <td>{{booking.hotel.name}}</td>
        <td>{{booking.hotel.address}}</td>
        <td>{{booking.hotel.city}}, {{booking.hotel.state}}, {{booking.hotel.country}}</td>
        <td>{{booking.checkinDate}}</td>
        <td>{{booking.checkoutDate}}</td>
        <td>{{booking.id}}</td>
        <td>

        </td>
      </tr>
      </tbody>
    </table>
    <template v-else>
      <p>
        No Bookings Found
      </p>
    </template>
  </div>
</template>
<script>
import HotelService from "~/services/HotelService";
export default {
  layout: "default",
  //  middleware: "guest",
  metaInfo() {
    return { title: 'Hotels' };
  },
  watch: {
    'params.page': {
      handler: function (value) {
        this.params.page = value
        this.params.size = this.params.per
        this.handleFindHotels()
      }
    },
    'params.per': {
      handler: function (value) {
        this.params.page = value
        this.params.size = this.params.per
        this.handleFindHotels()
      }
    }
  },
  data() {
    return {
      search:null,
      params: {
        page: 1,
        size: 8,
        per: 8
      },
      bookings:[],
      hotels:[]
    };
  },
  methods: {
    handleLogin(){
    },
    handleFindHotels(){
      HotelService.index(this.search,this.params.size,this.params.page).then(response =>{
        this.hotels = response.data.data
      })
    }
  }
}
</script>
