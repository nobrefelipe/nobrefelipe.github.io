// import 'expose?$!expose?jQuery!jquery';

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';


import POSTS from '../../services/postsService';
const _POSTS = new POSTS();



export default {

    name: 'collection',

    props: {

        endpoint: null,

        options: {}

    },

    data() {
        return {

            collection: null,
            loaded: false

        }
    },


    created () {
        // fetch the data when the view is created
        this.getBestsellers();

    },

    updated(){

    },

    methods: {

        getBestsellers: function(){

            _POSTS.get(this.endpoint)

                .then( response => {

                    this.collection = response.obj;

                })

                .done( () => {

                    this.loaded = true;

                }
            );

        },

    }

}
