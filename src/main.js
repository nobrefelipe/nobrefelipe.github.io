global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;


import Vue from 'vue'
import VueRouter from 'vue-router';



// ONSEN imports
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import 'onsenui';
import VueOnsen from 'vue-onsenui';


import HomeComponent from './components/Home/HomeComponent.vue';
import BookDetailComponent from './components/BookDetail/BookDetailComponent.vue';
import BooksComponent from './components/Books/BooksComponent.vue';


Vue.use(VueOnsen);
Vue.use(VueRouter);


const routes = [
    { path: '/', component: HomeComponent },
    { path: '/books', component: BooksComponent },
    { path: '/:slug', component: BookDetailComponent }
];



const router = new VueRouter({
    mode: 'history',
    routes
});



const app = new Vue({
    router
}).$mount('#app');
