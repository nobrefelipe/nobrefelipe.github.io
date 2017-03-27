import Vue from 'vue'

import Collection from '../Collection/CollectionComponent.vue';




export default {

    name: 'App',

    components: {

        'collection': Collection

    },

    data() {

        return {

            bestSellers: 'books/?filter[meta_key]=is_bestseller&filter[meta_value]=1&per_page=9',

            newReleases: 'books/?filter[meta_key]=is_new_release&filter[meta_value]=1&per_page=9',

            owlOptions: {
                loop:false,
                stagePadding: 30,
                items:2
            }

        }

    }

}