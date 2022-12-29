function page(path) {
    return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then((m) => m.default || m);
}

export default [
    /** ****************** CLIENTE ******************** */
    { path: '/', name: 'home', component: page('application/index.vue') },


];
