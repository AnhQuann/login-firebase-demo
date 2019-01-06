import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';
import firebase from 'firebase';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes:[
        {
            path: '/home',
            name:'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '*',
            redirect: '/login'
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/sign-up",
            name: "SignUp",
            component: SignUp
        }
    ]
});

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('login');
    else if (!requiresAuth && currentUser) next('home');
    else next();
})

export default router;