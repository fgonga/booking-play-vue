import Vue from 'vue';
import App from '~/components/App';
import router from '~/router';
import '~/plugins';
import '~/components';
import Swal from "vue-sweetalert2";

Vue.config.productionTip = false;
// Component de telefone
Vue.use(Swal)
new Vue({
    router,
    ...App,
});
