function page(path) {
    return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then((m) => m.default || m);
}

export default [
    { path: '/', name: 'home', component: page('auth/login.vue') },
    { path: '/login', name: 'login', component: page('auth/login.vue') },
    /** ****************** Hotels ******************** */
    { path: '/hotels', name: 'hotels.index', component: page('hotel/index.vue') },
];
