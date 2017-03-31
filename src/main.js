global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;



//Vue imports
import Vue from 'vue'
import VueRouter from 'vue-router';


//import vuefire
import Vuefire from 'vuefire';


// ONSEN imports
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import 'onsenui';
import VueOnsen from 'vue-onsenui';


//Components
import HomeComponent from './components/Home/HomeComponent.vue';
import BookDetailComponent from './components/BookDetail/BookDetailComponent.vue';
import BooksComponent from './components/Books/BooksComponent.vue';


//Use Plugins
Vue.use(VueOnsen);
Vue.use(VueRouter);
Vue.use(Vuefire);


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
