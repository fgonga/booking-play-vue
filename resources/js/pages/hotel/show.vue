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
      <p class="buttons">
        <input type="submit" value="Book Hotel"> <a href="@{index()}">Back to search</a>
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
      busy:false
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
