import Vue from 'vue';
import axios from 'axios';
import store from '~/store';
import router from '~/router';
import i18n from '~/plugins/i18n';
import error_msg from '~/helpers/error_msg';
// Request interceptor
axios.interceptors.request.use((request) => {
    const token = store.getters['auth/token'];
    if (token) {
        request.headers.common.Authorization = `Bearer ${token}`;
    }

    const locale = store.getters['lang/locale'];
    if (locale) {
        request.headers.common['Accept-Language'] = locale;
    }
    // eslint-disable-next-line no-param-reassign
    request.config = {
        showToast: false, // may be overwritten in next line
        ...(request.config || {}),
        start: Date.now(),
    };
    if (request.config.showToast) {
        // eslint-disable-next-line no-param-reassign
        // request.config.requestToastId = Vue.$vToastify.success(request.config.requestToast.title)

    }



    request.headers['content-type'] = 'application/x-www-form-urlencoded'
    request.data = new URLSearchParams(request.data);

    return request;
});

// Response interceptor
axios.interceptors.response.use((response) => {
    const now = Date.now();
    const request = response.config;
    //console.info(`Api Call ${request.url} took ${now - request.config.start}ms`);

    if (request.config.requestToastId) {

    }

    if (request.config.showToast && request.config.responseToast) {
        Vue.prototype.$toastr.defaultPosition = 'toast-bottom-right';

        Vue.prototype.$toastr.s(request.config.responseToast.title);
    }

    return response;
}, (error) => {

    const { status } = error.response;

    if (status === 401 ) {
        Vue.prototype.$swal.fire({
            icon: 'warning',
            title: i18n.t('token_expired_alert_title'),
            text: i18n.t('token_expired_alert_text'),
            reverseButtons: true,
            confirmButtonText: i18n.t('ok'),
            cancelButtonText: i18n.t('cancel'),
        }).then(() => {
            store.commit('auth/LOGOUT');
            router.push({ name: 'auth.login' });
        });
        return Promise.reject(error);
    }
    if (status === 422) {
        return Promise.reject(error);
    }
    if (status === 422) {
        console.log(error.response.data.errors);
    }
    if (status >= 500) {
        serverError(error.response);
        return Promise.reject(error);
    }

    if (status >= 400 || status <= 426) {
        clientError(error);
        return Promise.reject(error);
    }

    return Promise.reject(error);
});

let serverErrorModalShown = false;
async function clientError(error) {
    const { status } = error.response;
    if (status === 401) { return; }
    const brower = clientInformation;

    const help = error_msg.get(status);

    if (serverErrorModalShown) {
        return;
    }

    Vue.prototype.$swal.fire({
        title: help.titulo,
        html: `
        <p class="text-justify">${help.solucao}</p>
        `,
        icon: 'error',
        reverseButtons: true,
        confirmButtonText: 'Comunicar problema!',
        cancelButtonText: 'Tentar novamente',
        showCancelButton: true,
        showLoaderOnConfirm: true,

        preConfirm: () => axios.post('/api/helpdesk', {
            appCodeName: brower.appCodeName,
            appName: brower.appName,
            appVersion: brower.appVersion,
            platform: brower.platform,
            userAgent: brower.userAgent,
            exception: error.response.data.exception ? error.response.data.exception : 'Erro no cliente',
            file: error.response.data.file ? error.response.data.file : 'Erro no cliente',
            line: error.response.data.line ? error.response.data.line : 'Erro no cliente',
            message: error.response.data.message ? error.response.data.message : 'Erro no cliente',
            date: error.response.headers.date,
            responseURL: error.response.request.responseURL,
            status: error.response.status,
            statusText: error.response.statusText,
            responseText: error.response.request.responseText,
        }).then((response) => {
            Vue.prototype.$swal.fire({
                icon: 'success',
                text: 'Fomos comunicados sobre o problema iremos resolver o mais rápido possível.',
            });
        }).catch((error) => {
            Vue.prototype.$swal.fire({
                icon: 'error',
                text: 'Não foi possível comunicar sobre o problema, caso o problema persistir entre em contacto : geral@bit.ao',
            });
        }),
        allowOutsideClick: () => !Vue.prototype.$swal.isLoading(),
    }).then((result) => {

    });
}
async function serverError(response) {
    if (serverErrorModalShown) {
        return;
    }
    if ((response.headers['content-type'] || '').includes('text/html')) {
        const iframe = document.createElement('iframe');

        if (response.data instanceof Blob) {
            iframe.srcdoc = await response.data.text();
        } else {
            iframe.srcdoc = response.data;
        }

        Vue.prototype.$swal.fire({
            html: iframe.outerHTML,
            showConfirmButton: false,
            customClass: { container: 'server-error-modal' },
            didDestroy: () => { serverErrorModalShown = false; },
            grow: 'fullscreen',
            padding: 0,
        });

        serverErrorModalShown = true;
    } else {
        Vue.prototype.$swal.fire({
            icon: 'error',
            title: 'Erro interno',
            text: 'Fomos comunicados sobre o problema iremos resolver o mais rápido possível. \n ',
            reverseButtons: true,
            confirmButtonText: i18n.t('ok'),
            cancelButtonText: i18n.t('cancel'),
        });
        // store.dispatch('bugs/sendBug',response);
    }
}
export default axios;
