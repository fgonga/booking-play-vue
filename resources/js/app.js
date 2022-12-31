import Vue from 'vue';
import store from '~/store'
import App from '~/components/App';
import router from '~/router';
import i18n from '~/plugins/i18n'
import '~/plugins';
import '~/components';
import Swal from "vue-sweetalert2";

Vue.config.productionTip = false;
// Component de telefone
Vue.use(Swal)
new Vue({
    i18n,
    router,
    store ,
    ...App,
});
