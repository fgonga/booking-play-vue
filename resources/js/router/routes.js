function page(path) {
    return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then((m) => m.default || m);
}

export default [
    { path: '/', name: 'home', component: page('auth/login.vue') },
    { path: '/login', name: 'auth.login', component: page('auth/login.vue') },
    /** ****************** Hotels ******************** */
    { path: '/hotel', name: 'hotel.index', component: page('hotel/index.vue') },
    { path: '/hotel/:id', name: 'hotel.show', component: page('hotel/show.vue') },
];
