import POSTS from '../../services/postsService';
const _POSTS = new POSTS();

import toggler from '../../directives/toggler';


export default {

    name: 'bookDetail',

    data() {

        return {

            'endpoint' : 'books/?slug=' + this.$route.params.slug,
            animeIn: false,

            book_cover : '/assets/img/placeholder.png',
            book_cover_color1:  "",
            book_cover_color2: "",
            book_title : "",
            book_author: "",
            book_categories : "",
            book_main_category: "",
            book_format : "",
            book_isbn10 : "",
            book_isbn : "",
            book_pages : "",
            book_synopsis : "",
            book_author_details : "",
            book_published : "",
            book_price_original : "",
            book_price_promo : "",
            book_in_promo: "",
            book_current_price: "",
            book_buy : "",
            book_sample_link : "",
            book_sellers : Array,
            show_selling_options: false,
            inFromBottom: 'inFromBottom',
            activeClass: 'active'


        }

    },


    created(){


        _POSTS.get(this.endpoint)

            .then(response => response.obj[0])
            .then( data => {

                console.log(data);

                this.author_ID = data.acf.book_author[0].ID;

                this.book_cover_color1 = data.acf.book_custom_color_1;
                this.book_cover_color2 = data.acf.book_custom_color_2;

                this.book_cover = data.the_thumbnail;
                this.book_title = data.title.rendered;

                this.book_author = data.acf.book_author[0].post_title;
                this.book_author_details = data.acf.book_author[0].post_content;


                this.book_isbn = data.acf.isbn ;
                this.book_isbn10 = data.acf.isbn10 ;
                this.book_pages = data.acf.pages ;


                this.book_categories = data.the_book_categories[0].name;
                this.book_main_category = data.acf.book_main_category.name;

                this.book_format = data.the_book_format[0].name;
                this.book_synopsis = data.acf.book_synopsis;

                this.book_published = data.acf.book_published;

                this.book_price_original = data.acf.book_price_original;
                this.book_price_promo = data.acf.book_price_promo;
                this.book_buy = data.acf.book_buy;
                this.book_sellers = data.acf.selling_channels;

            })
            .done( () => {
                this.animeIn = true;
                this.book_in_promo = this.book_price_promo ? 'in-offer' : '';
                this.book_current_price = this.book_price_promo ? this.book_price_promo  : this.book_price_original ;
            });

    },


    methods: {
        showSells(e){

            this.show_selling_options = !this.show_selling_options


        }
    }

}