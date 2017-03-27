import Vue from 'vue';

import InfiniteLoading from '../Global/InfiniteLoading/InfiniteLoading.vue';
import POSTS from '../../services/postsService';
const _POSTS = new POSTS();


import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);


export default {

    name: 'books',

    components: {

        'infinite-loading': InfiniteLoading

    },


    data() {

        return {

            //Action Sheets Defaults
            sheetVisible: false,

            actions: [
                {
                    name: 'Reset',
                    method: this.resetFilters
                },
                {
                    name: 'Price Highest',
                    method: this.filter_priceHigh
                },
                {
                    name: 'Price Lowest',
                    method: this.filter_priceLow
                },
                {
                    name: 'A - Z',
                    method: this.filter_aZ
                },
                {
                    name: 'Z - A',
                    method: this.filter_zA
                }
            ],

            placeholders: 4,

            //our paging control
            paged: 1,

            //will be true when user reaches last page
            done: false,

            endpoint: '',

            loading: false,

            //lets define our Array of Collections
            collection: []

        }

    },


    methods: {

        getBooks: function(){

            this.loading = true;

            //if last page, stop here
            if(this.done) return;

            _POSTS.get( 'books/?per_page=6&page=' + this.paged +  this.endpoint)

                .then( response => {

                    //if last page is reached, hide the button
                    this.done = _POSTS.paging(response.request, this.paged);

                    //push the response to the 'posts' array
                    //use the '...' so we dont create a new array of posts every time
                    this.collection.push(...response.obj);

                    //update paging
                    this.paged++;

                    console.log(response.obj);

                })

                .done( () => {
                        this.loading = false;

                    }
                );

        },


        /*
         FILTERS
         */

        applyFilter(filterEndpoint){
            this.endpoint = filterEndpoint;
            this.collection = [];
            this.paged = 1;
            this.getBooks();
        },

        resetFilters(){
            this.applyFilter('')
        },

        filter_aZ() {
            this.applyFilter('&orderby=title&order=asc');
        },

        filter_zA() {
            this.applyFilter('&orderby=title&order=desc');
        },

        filter_priceHigh() {
            this.applyFilter('&filter[meta_key]=book_price_original&filter[orderby]=meta_value_num&order=desc');
        },

        filter_priceLow() {
            this.applyFilter('&filter[meta_key]=book_price_original&filter[orderby]=meta_value_num&order=asc');
        }


    }

}