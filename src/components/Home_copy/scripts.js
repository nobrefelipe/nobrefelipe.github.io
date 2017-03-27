import Vue from 'vue';

// import PostsComponent from '../Books/BooksComponent.vue';
import InfiniteLoading from '../Global/InfiniteLoading/InfiniteLoading.vue';


import Collection from '../Collection/CollectionComponent.vue';

import POSTS from '../../services/postsService';
const _POSTS = new POSTS();



import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);


import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);




export default {

    name: 'App',

    components: {

        'collection': Collection,

        'infinite-loading': InfiniteLoading

    },

    data() {

        return {

            //Action Sheets Defaults
            sheetVisible: false,
            actions: [],

            //our paging control
            paged: 1,

            //will be true when user reaches last page
            done: false,

            endpoint: '',

            loading: false,

            //lets define our Products Object
            collection: []

        }

    },


    //EVENTS
    methods: {

        getPosts: function(){

            this.loading = true;


            _POSTS.get( 'books/?filter[meta_key]=is_bestseller&filter[meta_value]=1&per_page=9&page=' + this.paged +  this.endpoint)

                .then( response => {

                    if(!this.loading) return;

                    //if last page is reached, hide the button
                    this.done = _POSTS.paging(response.request, this.paged);

                    //push the response to the 'posts' array
                    //use the '...' so we dont create a new array of posts every time
                    this.collection.push(...response.obj);


                    //update paging
                    this.paged++;


                })

                .done( () => {
                        this.loading = false;
                    }
                );


        },

        getPosts_reset(){
            this.paged = 1;
            this.loading = true;
            this.posts = [];
            this.done = false;
            this.getPosts();
        },


        /*
            FILTERS
        */
        filter_all() {
            this.endpoint = '';
            this.getPosts_reset();
        },

        filter_industry() {
            this.endpoint = '&filter[category_name]=industry-news';
            this.getPosts_reset();
        },

        filter_company() {
            this.endpoint = '&filter[category_name]=company-news';
            this.getPosts_reset();
        },



    },


    //COMPONENT READY LIFECYCLE
    mounted: function () {

        this.getPosts();



        this.actions = [{
            name: 'All',
            method: this.filter_all
        },{
            name: 'Company News',
            method: this.filter_company
        }, {

            name: 'Industry News',
            method: this.filter_industry
        }];
    },



}