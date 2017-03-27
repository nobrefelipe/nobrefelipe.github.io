
const spinnerMapping = {

    bubbles: 'loading-bubbles',

    circles: 'loading-circles',

    default: 'loading-default',

    spiral: 'loading-spiral',

    waveDots: 'loading-wave-dots',

};



/**
 * get the first scroll parent of an element
 * @param  {DOM} elm    the element which find scorll parent
 * @return {DOM}        the first scroll parent
 */
function getScrollParent(elm) {

    if (elm.tagName === 'BODY') {

        return window;

    } else if (['scroll', 'auto'].indexOf(getComputedStyle(elm).overflowY) > -1) {

        return elm;

    }

    return getScrollParent(elm.parentNode);

}



/**
 * get current distance from footer
 * @param  {DOM} elm    scroll element
 * @return {Number}     distance
 */
function getCurrentDistance(elm) {

    const styles = getComputedStyle(elm === window ? document.body : elm);

    const innerHeight = elm === window
        ? window.innerHeight
        : parseInt(styles.height, 10);

    const scrollHeight = elm === window
        ? document.body.scrollHeight
        : elm.scrollHeight;

    const scrollTop = isNaN(elm.scrollTop) ? elm.pageYOffset : elm.scrollTop;

    const paddingTop = parseInt(styles.paddingTop, 10);

    const paddingBottom = parseInt(styles.paddingBottom, 10);

    return scrollHeight - innerHeight - scrollTop - paddingTop - paddingBottom;

}



export default {

    props: ['loaded'],

    data() {

        return {

            scrollParent: null,

            scrollHandler: null,

            isLoading: false,

            isComplete: false,

            isFirstLoad: true, // save the current loading whether it is the first loading

        };

    },


    computed: {

        spinnerType() {

            return spinnerMapping[this.spinner] || spinnerMapping.default;

        },

    },


    props: {

        distance: {

            type: Number,
            default: 100,

        },

        onInfinite: {

            type: Function,
            required: true,

        },

        spinner: String,

    },


    //ON COMPONENT IS READY
    mounted: function() {

        //GET THE THE FIRST SCROLLABLE PARENT
        // this.$el refers to the the infinite-scroll element itself
        this.scrollParent = getScrollParent(this.$el);


        //The function responsible for firing the loading method
        this.scrollHandler = function scrollHandlerOriginal() {


            this.completed();


            //if is not on loading proccess
            if (!this.isLoading) {

                //fire the loading
                this.attemptLoad();

            }

        }.bind(this);


        //Fire the first call
        setTimeout(this.scrollHandler, 1);

        //listen to the scroll event on the parent and fire the scrollHandler function
        this.scrollParent.addEventListener('scroll', this.scrollHandler);

    },


    methods: {

        completed(){

            if(this.loaded){

                this.isLoading = true;

            }else{

                this.isLoading = false;

            }

        },

        attemptLoad() {

            //parents current distance from footer
            const currentDistance = getCurrentDistance(this.scrollParent);

            //if is not completed and current distance is in the default range distance
            if (!this.isComplete && currentDistance <= this.distance) {

                this.isLoading = true;

                //call the method set on 'on-infinite' prop
                this.onInfinite.call();

            } else {

                this.isLoading = false;

            }

        },

    },


    destroyed() {

        if (!this.isComplete) {

            this.scrollParent.removeEventListener('scroll', this.scrollHandler);

        }

    },


};