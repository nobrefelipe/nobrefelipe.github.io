webpackJsonp([1],Array(32).concat([
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);

/*
    CLICK OUTSIDE ELEMENT DIRECTIVE
*/




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].directive('click-outside', {

    bind(el, binding, vnode) {

        var trigger = function (event) {

            //check if user is not clicking on the host element || any of its children
            if (!(el == event.target || el.contains(event.target))) {

                // FIRE IT!
                vnode.context[binding.expression](event);

            }

        };

        // WATCH FOR CLICKING AROUND
        document.body.addEventListener('click', trigger);
        document.body.addEventListener('touchstart', trigger);

    },


    unbind() {

        //STOP WATCHING IT! #perfomanceMatters
        document.body.removeEventListener('click', trigger);
        document.body.removeEventListener('touchstart', trigger);

    }


});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_pages_home_index_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_pages_home_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_pages_home_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pages_photography_index_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pages_photography_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_pages_photography_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_pages_web_development_index_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_pages_web_development_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_pages_web_development_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pages_about_index_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pages_about_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_pages_about_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_pages_laboratory_index_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_pages_laboratory_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_pages_laboratory_index_vue__);











__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({

  mode: 'history',

  routes: [

    {

      path: '/',
      name: 'Home',
      component: __WEBPACK_IMPORTED_MODULE_2__components_pages_home_index_vue___default.a

    },

    {

      path: '/photography',
      name: 'photography',
      component: __WEBPACK_IMPORTED_MODULE_3__components_pages_photography_index_vue___default.a

    },

    {

      path: '/web-development',
      name: 'web-development',
      component: __WEBPACK_IMPORTED_MODULE_4__components_pages_web_development_index_vue___default.a

    },

    {

      path: '/lab',
      name: 'lab',
      component: __WEBPACK_IMPORTED_MODULE_6__components_pages_laboratory_index_vue___default.a

    },

    {

      path: '/about',
      name: 'about',
      component: __WEBPACK_IMPORTED_MODULE_5__components_pages_about_index_vue___default.a

    }

  ]

}));


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(20);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({

    state: {


        features: [

            {

                name: "communication",
                description: "I realize the importance of good communication. I use tools like <a href='https://slack.com/' target='_blank'>Slack</a> to make sure we’re always on the same sintony.",

            },

            {

                name: "timekeeping",
                description: " I value my clients' time and always aim to work efficiently. I account-for and track everything I do using services such as <a href='https://toggl.com/' target='_blank'>Toggl</a>."

            },

            {

                name: "management",
                description: "I think it’s important to identify the discrete stages of a project and work to a schedule around those.",

            },

            {

                name: "collaboration",
                description: "I play well with others. I’m happy to integrate into your existing team to help get your project implemented.",

            },

            {

                name: "development",
                description: "On a technical level, I am in the market for more than 6 years, I like to think I can create anything [on the web] using my skills. Of course, as a self taught I know that there are always things to learn and improve",

            },

            {

                name: "design",
                description: "While I’m not a web designer, I have an appreciation and eye for good design. I’m comfortable using Photoshop, Illustrator and Sketch and can take designs from mock-up to implementation.",

            },

            {

                name: "organisation",
                description: "I believe it’s important to stay organised while working remotely. I Like to use <a href='https://trello.com/' target='_blank'>Trello</a> to help keep projects on-track and under control.",

            },

            {

                name: "documentation",
                description: "Often overlooked, I think it’s incredibly important to leave clients with a clear picture of what’s been done for the next round of development.",

            }
        ],


        photography: [

            {
                title: "vietnamese-faces-series-1",
                description: "",
                image: "",
                tags: ["portrait", "people"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "vietnamese-faces-series-2",
                description: "",
                image: "",
                tags: ["portrait", "people"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "vietnamese-faces-series-3",
                description: "",
                image: "",
                tags: ["portrait", "people"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "vietnamese-faces-series-4",
                description: "",
                image: "",
                tags: ["portrait", "people"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "vietnamese-faces-series-5",
                description: "",
                image: "",
                tags: ["portrait", "people"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "vietnamese-faces-series-6",
                description: "",
                image: "",
                tags: ["portrait", "people"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "sunset-bangkok",
                description: "",
                image: "",
                tags: ["landscape", "sunset"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "into-the-sunset",
                description: "",
                image: "",
                tags: ["landscape", "sunset"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },


            {
                title: "smoke",
                description: "",
                image: "",
                tags: ["black and white", "people"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "singapore-catedral",
                description: "",
                image: "",
                tags: ["city", "urban", "architecture"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "sinos",
                description: "",
                image: "",
                tags: ["street", "urban", "things"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "perfect-ratio-stares",
                description: "",
                image: "",
                tags: ["city", "urban", "architecture", "black and white"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "singapore-bridge",
                description: "",
                image: "",
                tags: ["city", "urban", "architecture", "black and white"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "hidden-oxford-series-1",
                description: "",
                image: "",
                tags: ["city", "urban", "architecture"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "hidden-oxford-series-2",
                description: "",
                image: "",
                tags: ["city", "urban", "architecture"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "hidden-oxford-series-3",
                description: "",
                image: "",
                tags: ["city", "urban", "architecture"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "hidden-oxford-series-4",
                description: "",
                image: "",
                tags: ["portrait", "people"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "do-not-hear-do-not-see-do-not-speak",
                description: "",
                image: "",
                tags: ["street", "urban", "things"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "through-the-gate",
                description: "",
                image: "",
                tags: ["portrait", "people", "black and white"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "eyes",
                description: "",
                image: "",
                tags: ["portrait", "people", "black and white"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "cleaning-time",
                description: "",
                image: "",
                tags: ["black and white", "people"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "chinatown-rua",
                description: "",
                image: "",
                tags: ["street", "people", "urban"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "bangkok-from-below-series-1",
                description: "",
                image: "",
                tags: ["street", "urban", "architecture"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "bangkok-from-below-series-2",
                description: "",
                image: "",
                tags: ["street", "urban", "architecture"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "bangkok-from-below-series-3",
                description: "",
                image: "",
                tags: ["street", "urban", "architecture"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "chinatown-gate",
                description: "",
                image: "",
                tags: ["street", "urban", "architecture"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "bus-stop",
                description: "",
                image: "",
                tags: ["black and white", "people", "street", "urban"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "city-exploration-series-1",
                description: "",
                image: "",
                tags: ["street", "urban"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },


            {
                title: "landscape-series-1",
                description: "",
                image: "",
                tags: ["landscape"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "landscape-series-2",
                description: "",
                image: "",
                tags: ["landscape"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },


            {
                title: "to-the-infinite",
                description: "",
                image: "",
                tags: ["people"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },


            {
                title: "paddling-the-whiteness",
                description: "",
                image: "",
                tags: ["black and white", "people"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "a-pancake-for-a-smile",
                description: "",
                image: "",
                tags: ["portrait", "people", "black and white"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "urban-exploration-series-1",
                description: "",
                image: "",
                tags: ["people", "urban", "street"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "urban-exploration-series-2",
                description: "",
                image: "",
                tags: ["people", "urban", "street"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "urban-exploration-series-3",
                description: "",
                image: "",
                tags: ["people", "urban", "street"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },

            {
                title: "urban-exploration-series-4",
                description: "",
                image: "",
                tags: ["people", "urban", "street"],
                settings: {

                    camera: "NX1",
                    lenses: "NX 50-200mm F4-5.6",
                    focal_length:"130",
                    aperture: "5",
                    shutter_speed: "1/320",
                    iso: "200"

                }
            },



        ]

    }

}));



/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(112),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/*
 CLICK OUTSIDE ELEMENT DIRECTIVE
 */




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].directive('click-outside', {

    bind(el, binding, vnode) {

        var trigger = function (event) {

            //check if user is not clicking on the host element || any of its children
            if (!(el == event.target || el.contains(event.target))) {

                // FIRE IT!
                vnode.context[binding.expression](event);

            }

        };

        // WATCH FOR CLICKING AROUND
        document.body.addEventListener('click', trigger);
        document.body.addEventListener('touchstart', trigger);

    },


    unbind() {

        //STOP WATCHING IT! #perfomanceMatters
        document.body.removeEventListener('click', trigger);
        document.body.removeEventListener('touchstart', trigger);

    }


});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/*
 FADE IN THE ELEMENT
 */



//import {TweenMax, Cubic} from "gsap";

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].directive('fade-in', {


    bind(el){

        el.classList.add('has-transition');

        el.style.opacity = 0;

        console.log('ssd');

    },

    // ENTRY
    inserted(el, binding) {

        setTimeout(function () {

            el.style.opacity = 1;

        }, binding.value)

    },


    // LEAVE
    unbind(el, binding) {

        el.style.opacity = 0;

    }


});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase__ = __webpack_require__(40);



let db = __WEBPACK_IMPORTED_MODULE_0__firebase__["a" /* default */].database();

/* harmony default export */ __webpack_exports__["a"] = (db);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);




// Initialize Firebase
let config = {
    apiKey: "AIzaSyA_VxldzPCbmetaDs1aOaMn09KcyoHEiv0",
    authDomain: "studio-nomade.firebaseapp.com",
    databaseURL: "https://studio-nomade.firebaseio.com",
    projectId: "studio-nomade",
    storageBucket: "studio-nomade.appspot.com",
    messagingSenderId: "79526779021"
};

let firebaseApp = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.initializeApp(config);

/* harmony default export */ __webpack_exports__["a"] = (firebaseApp);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*

    ANIMATED SCROLL TO TOP
    Thanks Qbrid for this pen
    https://codepen.io/Qbrid/pen/EgAYNg

*/


// Needed to cancel the scrolling when we are at the top of the page
let intervalId = 0;


const scrollStep = function() {

    // Check if we are at the top already. If so, stop scrolling by clearing the interval
    if (window.pageYOffset === 0) {

        clearInterval(intervalId);

    }

    window.scroll(0, window.pageYOffset - 50);

};

const scrollToTop = function() {

    // Call the function scrollStep() every 16.66 millisecons
    intervalId = setInterval(scrollStep, 16.66);

};


/* harmony default export */ __webpack_exports__["a"] = (scrollToTop);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_store__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mint_ui__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mint_ui_lib_style_css__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mint_ui_lib_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mint_ui_lib_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_click_outside__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_lazyload__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_lazyload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vue_lazyload__);

/* DEFAULTS */







/* EXTERNAL LIBRARIES*/
 //Mint UI mobile library
 //Mint UI styles


/* MY OWN DIRECTIVES */




/* INSTALLED DIRECTIVES */

//import VueParallaxJs from 'vue-parallax-js';



/* INIT */

// Vuex
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

// Mint UI
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_mint_ui___default.a);

// Vue Parallax
//Vue.use(VueParallaxJs, {minWidth: 500});

// Vue Lazy Load
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_8_vue_lazyload___default.a, {

  preLoad: 1.3,

  loading: 'static/svg/spin.svg',

  attempt: 1

});


new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({

  el: '#app',

  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],

  store: __WEBPACK_IMPORTED_MODULE_4__store_store__["a" /* default */],

  directives:{

    ClickOutside: __WEBPACK_IMPORTED_MODULE_7__directives_click_outside__["default"]

  },

  template: '<App/>',

  components: { App: __WEBPACK_IMPORTED_MODULE_2__App___default.a }

});


/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({

  name: 'about',

  data: function data() {
    return {

      userid: 1539883988,

      instafeed: null

    };
  },
  mounted: function mounted() {
    var _this = this;

    var params = {

      params: {

        access_token: '1539883988.1677ed0.cb4c16a66e70487f9b0396edd1ca8115',

        count: 18
      }

    };

    var instafeed = document.getElementById('instafeed');

    this.$http.jsonp('https://api.instagram.com/v1/users/' + this.userid + '/media/recent', params).then(function (data) {

      _this.instafeed = data.body.data;
    });
  }
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({

  name: 'home',

  props: [],

  mounted: function mounted() {},
  data: function data() {
    return {};
  },


  methods: {},

  computed: {}
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__restaurant_menu_modal_src_rmm_App_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__restaurant_menu_modal_src_rmm_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__restaurant_menu_modal_src_rmm_App_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({

  name: 'lab',

  components: {

    restaurantMenuModal: __WEBPACK_IMPORTED_MODULE_0__restaurant_menu_modal_src_rmm_App_vue___default.a

  }

});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_resource__ = __webpack_require__(117);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_resource__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = ({

  name: 'rmm-menu-item',

  data: function data() {
    return {

      isActive: false,

      data: null,

      image: null

    };
  },


  methods: {
    revealItem: function revealItem() {

      // Reinstance this
      var vm = this;

      // Get the host item
      var host = vm.$el;

      // If is already active
      if (host.classList.contains("show")) {

        // Out Animation Starts
        host.classList.add('animating-out');

        // Animation runs for 400ms
        setTimeout(function () {

          // Out Animation Finishes
          host.classList.remove('animating-out');

          // Unreveal Component
          host.classList.remove('show');

          // Set Active Status
          vm.isActive = false;

          vm.data = null;
        }, 400);
      } else {

        // In Animation Starts
        host.classList.add('animating-in');

        // Animation runs for 400ms
        setTimeout(function () {

          // In Animation Finishes
          host.classList.remove('animating-in');

          // Reveal Component
          host.classList.add('show');

          // Set Active Status
          vm.isActive = true;

          /*
             GET THE DATA
            using Json Placeholder for dummy content
           */
          vm.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {

            //get the first result content
            vm.data = response.body[0].body;
          });
        }, 400);
      }
    }
  }

});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_item_index_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_item_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__menu_item_index_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({

  name: 'menu-items',

  components: {

    rmmMenuItem: __WEBPACK_IMPORTED_MODULE_0__menu_item_index_vue___default.a

  },

  data: function data() {
    return {};
  }
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuefire__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuefire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuefire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mint_ui__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_scroll_to_top__ = __webpack_require__(41);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuefire___default.a);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_3_mint_ui__["Actionsheet"].name, __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Actionsheet"]);

/* harmony default export */ __webpack_exports__["default"] = ({

  name: 'photography',

  filters: {

    sanitize: function sanitize(value) {

      return value.replace(/ /g, "-");
    }

  },

  data: function data() {
    var _this = this;

    return {

      isMobile: /iPhone|iPod|Android/i.test(navigator.userAgent),

      sheetVisible: false,

      showFilter: false,

      allPics: '',

      filtered: null,

      actions: [{
        name: 'All',
        method: function method() {
          _this.filterPics('all');
        }
      }, {
        name: 'Street',
        method: function method() {
          _this.filterPics('street');
        }
      }, {
        name: 'People',
        method: function method() {
          _this.filterPics('people');
        }
      }, {
        name: 'Portrait',
        method: function method() {
          _this.filterPics('portrait');
        }
      }, {
        name: 'Black and White',
        method: function method() {
          _this.filterPics('bnw');
        }
      }, {
        name: 'Landscape',
        method: function method() {
          _this.filterPics('landscape');
        }
      }]

    };
  },
  firebase: function firebase() {
    return {

      DB_PICS: __WEBPACK_IMPORTED_MODULE_2__db__["a" /* default */].ref('/photography')

    };
  },
  mounted: function mounted() {
    this.filterPics('all');
  },


  methods: {
    sanitize: function sanitize(string) {

      var string = string.replace(/ /g, "-");
      return string.replace(/---/g, "-");
    },
    onFilter: function onFilter(e) {
      if (e.target && e.target.nodeName == "LI") {
        var filter = e.target.innerText.toLowerCase();

        this.filterPics(filter);
      }
    },
    filterPics: function filterPics(filter) {

      var vm = this;

      this.filtered = [];

      if (filter == 'all') {

        vm.filtered = vm.DB_PICS;
      } else {

        vm.$firebaseRefs.DB_PICS.orderByChild('tags/' + filter).startAt(filter).once("value").then(function (res) {

          res.forEach(function (data) {

            vm.filtered.push(data.val());
          });
        });
      }

      this.showFilter = false;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_scroll_to_top__["a" /* default */])();
    },
    revealFilters: function revealFilters() {

      this.showFilter = this.showFilter ? false : true;
    },
    onCLickOutside: function onCLickOutside() {

      this.showFilter = false;
    }
  }

});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({

  name: 'web-development',

  props: [],

  mounted: function mounted() {},
  data: function data() {
    return {

      features: this.$store.state.features

    };
  },


  methods: {},

  computed: {}

});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_shared_left_bar__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_shared_left_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_shared_left_bar__);




/* harmony default export */ __webpack_exports__["default"] = ({

  name: 'app',

  components: { LeftBar: __WEBPACK_IMPORTED_MODULE_0__components_shared_left_bar___default.a },

  data: function data() {
    return {

      mainTransition: 'fade'

    };
  },


  watch: {
    '$route': function $route(to, from) {
      if (from.name == 'Home') {
        this.mainTransition = 'from-home';
      } else {
          this.mainTransition = 'fade';
        }
    }
  },

  methods: {
    closeNav: function closeNav() {

      var navBar = document.getElementById('leftBar');

      if (navBar.classList.contains("menu-is-opened")) {

        navBar.classList.remove('menu-is-opened');
      }
    }
  }

});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_menu_items_index_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_menu_items_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_menu_items_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_click_outside__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_fadeIn__ = __webpack_require__(38);
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({

  name: 'restaurant-menu-modal',

  directives: {

    clickOutside: __WEBPACK_IMPORTED_MODULE_1__directives_click_outside__["default"],
    fadeIn: __WEBPACK_IMPORTED_MODULE_2__directives_fadeIn__["default"]

  },

  components: {

    rmmMenuItems: __WEBPACK_IMPORTED_MODULE_0__components_menu_items_index_vue___default.a

  },

  data: function data() {
    return {};
  }
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_trigger__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_trigger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__nav_trigger__);




/* harmony default export */ __webpack_exports__["default"] = ({

  name: 'left-bar',

  components: {

    NavTrigger: __WEBPACK_IMPORTED_MODULE_0__nav_trigger___default.a

  },

  methods: {
    onNavigate: function onNavigate(e) {
      if (e.target && e.target.nodeName == "A") {

        this.$el.classList.remove('menu-is-opened');
      }
    }
  }

});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({

  name: 'nav-bar',

  methods: {
    openNav: function openNav() {

      var navBar = document.getElementById('leftBar');

      navBar.classList.toggle("menu-is-opened");
    }
  }

});

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(62)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(115),
  /* scopeId */
  "data-v-d7b9f3c2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(57)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(109),
  /* scopeId */
  "data-v-2daef6a3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(63)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(116),
  /* scopeId */
  "data-v-f7b2f492",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(55)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(106),
  /* scopeId */
  "data-v-06f3d381",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(58)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(110),
  /* scopeId */
  "data-v-389057b0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(61)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(114),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(59)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(111),
  /* scopeId */
  "data-v-444c62ef",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(56)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(108),
  /* scopeId */
  "data-v-2b4467d4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(107),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(60)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(113),
  /* scopeId */
  "data-v-7711358c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "rmm-menu-item",
    on: {
      "click": _vm.revealItem,
      "blur": _vm.revealItem
    }
  }, [_c('div', {
    staticClass: "rmm-menu-item-cover"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/rmm/steak1.jpg",
      "alt": ""
    }
  }), _vm._v(" "), (_vm.isActive) ? _c('a', {
    directives: [{
      name: "fade-in",
      rawName: "v-fade-in",
      value: (500),
      expression: "500"
    }],
    staticClass: "rmm-btn",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("BOOK NOW")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "rmm-menu-item-main"
  }, [_c('span', {
    staticClass: "category-title"
  }, [_vm._v("pasture for life")]), _vm._v(" "), (!_vm.isActive) ? _c('span', {
    staticClass: "large-title"
  }, [_vm._v("Fresh Steak")]) : _vm._e(), _vm._v(" "), (_vm.isActive) ? _c('span', {
    staticClass: "large-title"
  }, [_vm._v("Fresh Steak And Locally Farm Produced.")]) : _vm._e(), _vm._v(" "), (!_vm.isActive) ? _c('p', [_vm._v("\n\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar urna in orci gravida feugiat.\n\n        ")]) : _vm._e(), _vm._v(" "), (_vm.isActive) ? _c('span', {
    staticClass: "more-content"
  }, [_c('p', {
    directives: [{
      name: "fade-in",
      rawName: "v-fade-in",
      value: (600),
      expression: "600"
    }]
  }, [_vm._v(_vm._s(_vm.data))]), _vm._v(" "), (_vm.isActive) ? _c('img', {
    directives: [{
      name: "fade-in",
      rawName: "v-fade-in",
      value: (800),
      expression: "800"
    }],
    attrs: {
      "src": "/static/img/rmm/steak2.jpg",
      "alt": "Some Title"
    }
  }) : _vm._e()]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "leftBar",
    attrs: {
      "id": "leftBar"
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/",
      "id": "logo"
    }
  }, [_c('svg', {
    attrs: {
      "role": "img",
      "title": "SN"
    }
  }, [_c('use', {
    attrs: {
      "xlink:href": "./static/svg/svgstore.svg#logo"
    }
  })]), _vm._v(" "), _c('span', [_vm._v(" <studio-nomade/> ")])]), _vm._v(" "), _c('nav-trigger'), _vm._v(" "), _c('nav', {
    staticClass: "mainNav",
    on: {
      "click": function($event) {
        _vm.onNavigate($event)
      }
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/web-development",
      "title": "WEB DEVELOPMENT"
    }
  }, [_vm._v("web development")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/photography",
      "title": "PHOTOGRAPHY"
    }
  }, [_vm._v("photography")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/about",
      "title": "ABOUT ME"
    }
  }, [_vm._v("about me")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "mailto:felipe@nomade.studio",
      "title": "HIRE ME"
    }
  }, [_vm._v("hire me")])], 1), _vm._v(" "), _c('nav', {
    staticClass: "socialNav"
  }, [_c('a', {
    attrs: {
      "href": "https://github.com/nobrefelipe",
      "title": "GITHUB",
      "target": "_blank"
    }
  }, [_c('svg', {
    attrs: {
      "role": "img",
      "title": "Github"
    }
  }, [_c('use', {
    attrs: {
      "xlink:href": "./static/svg/svgstore.svg#github"
    }
  })])]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "http://instagram.com/canalnomade",
      "title": "INSTAGRAM",
      "target": "_blank"
    }
  }, [_c('svg', {
    attrs: {
      "role": "img",
      "title": "Instagram"
    }
  }, [_c('use', {
    attrs: {
      "xlink:href": "./static/svg/svgstore.svg#instagram"
    }
  })])])])], 1)
},staticRenderFns: []}

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "web-development view"
  }, [_c('h1', [_vm._v("WEB DEVELOPMENT")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('p', {
    staticClass: "is-text-center"
  }, [_vm._v("\n\n    I also master :\n\n  ")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('blockquote', [_vm._v("\n\n    Working as a freelancer is not just about the coding. "), _c('br'), _vm._v("\n    I understand the challenges of working remotely on client projects."), _c('br'), _vm._v("\n    Here’s a couple of things I think I’m good at:\n\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "features"
  }, _vm._l((_vm.features), function(item) {
    return _c('div', {
      staticClass: "features-item"
    }, [_c('div', [_c('svg', {
      attrs: {
        "role": "img",
        "title": item.name
      }
    }, [_c('use', {
      attrs: {
        "xlink:href": './static/svg/svgstore.svg#' + item.name
      }
    })]), _vm._v(" "), _c('h5', [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('p', {
      domProps: {
        "innerHTML": _vm._s(item.description)
      }
    })])
  }))], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "is-text-center"
  }, [_vm._v("\n\n    I have been developing websites since 2011, when I first jump into a Front End Developer Internship in Milan, Italy"), _c('br'), _vm._v("\n\n    After 2 months of watching tutorials and reading articles I passed from ‘knowing nothing’  to  ‘have some idea’ about web development."), _c('br'), _vm._v("\n\n    But that was enough for the guys from "), _c('a', {
    attrs: {
      "href": "http://www.more.it",
      "target": "_blank",
      "title": "More Interactive"
    }
  }, [_vm._v("More Interactive")]), _vm._v(" to give me a try :)"), _c('br'), _c('br'), _vm._v("\n\n    Since that I keep learning as much as I can. It’s been 7 years of great opportunities, great people "), _c('br'), _vm._v("\n\n    and amazing projects from Agencies in Milan to a Startup in London and from Contracts in Thailand to Remotes in Europe."), _c('br'), _c('br'), _vm._v(" "), _vm._v("\n\n    I love developing websites with Wordpress + Advanced Custom Fields + Timber (Twig for Wordpress). And now with Worpdress REST API + Vue.js\n    "), _c('br'), _c('br'), _vm._v("\n\n    My main skills are:\n\n  ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "skills-icons is-flexy is-center"
  }, [_c('li', [_c('img', {
    attrs: {
      "src": "static/img/html5-icon.png",
      "alt": "HTML 5",
      "title": "HTML 5"
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": "static/img/css3-icon.png",
      "alt": "CSS 3",
      "title": "CSS 3"
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": "static/img/js-icon.png",
      "alt": "JAVASCRIPT",
      "title": "JAVASCRIPT"
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": "static/img/vuejs-icon.png",
      "alt": "VUE JS",
      "title": "VUE JS"
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": "static/img/wordpress-icon.png",
      "alt": "WORDPRESS",
      "title": "WORDPRESS"
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": "static/img/timber-icon.png",
      "alt": "TIMBER",
      "title": "TIMBER"
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": "static/img/graphcool.svg",
      "alt": "GRAPHCOOL",
      "title": "GRAPHCOOL"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "skills-icons is-flexy is-center"
  }, [_c('li', [_c('img', {
    attrs: {
      "src": "static/img/sketch-icon.png",
      "alt": "SKETCH APP",
      "title": "SKETCH APP"
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": "static/img/photoshop-icon.png",
      "alt": "PHOTOSHOP",
      "title": "PHOTOSHOP"
    }
  })]), _vm._v(" "), _c('li', [_c('img', {
    attrs: {
      "src": "static/img/lightroom-icon.png",
      "alt": "LIGHTROOM",
      "title": "LIGHTROOM"
    }
  })])])
}]}

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "home"
  }, [_c('div', {
    staticClass: "home-left"
  }, [_c('div', {
    staticClass: "presentation"
  }, [_c('div', {
    staticClass: "introduction"
  }, [_vm._v("\n\n                Hi, I am\n\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_c('svg', {
    attrs: {
      "role": "img",
      "title": "FELIPE NOBRE"
    }
  }, [_c('use', {
    attrs: {
      "xlink:href": "./static/svg/svgstore.svg#felipenobre"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "what"
  }, [_vm._v("\n\n                WEB DEVELOPER - PHOTOGRAPHER\n\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "home-right"
  }, [_c('svg', {
    attrs: {
      "role": "img",
      "title": "HELLO"
    }
  }, [_c('use', {
    attrs: {
      "xlink:href": "./static/svg/svgstore.svg#hello"
    }
  })]), _vm._v(" "), _vm._m(0)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "is-text-white"
  }, [_vm._v("\n\n            Hi there, my name is Felipe! "), _c('br'), _vm._v("\n            I am a design-oriented front end developer and travel photographer.\n            "), _c('br'), _c('br'), _vm._v("\n\n            Need help with an upcoming project or application? Learn a bit more about me and then consider  "), _c('a', {
    staticClass: "is-text-white",
    attrs: {
      "href": "mailto:felipe@nomade.studio",
      "title": "HIRE ME"
    }
  }, [_vm._v("hiring")]), _vm._v(" me!\n            "), _c('br'), _c('br'), _vm._v("\n\n            Check my "), _c('a', {
    staticClass: "is-text-white",
    attrs: {
      "href": "https://github.com/nobrefelipe",
      "title": "Github"
    }
  }, [_vm._v("Github")]), _vm._v(" profile for more in depth idea of my coding skills\n            and also my "), _c('a', {
    staticClass: "is-text-white",
    attrs: {
      "href": "https://www.instagram.com/canalnomade/",
      "title": "Instagram"
    }
  }, [_vm._v("Instagram")]), _vm._v(" account for more travel photographs!\n\n        ")])
}]}

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "rmm-menu-items"
  }, [_c('rmm-menu-item')], 1)
},staticRenderFns: []}

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "photography view "
  }, [_c('div', {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: (_vm.onCLickOutside),
      expression: "onCLickOutside"
    }],
    staticClass: "filter",
    class: {
      'show-filters': _vm.showFilter
    },
    on: {
      "click": function($event) {
        _vm.sheetVisible = true
      }
    }
  }, [_c('svg', {
    staticClass: "filter-icon",
    attrs: {
      "role": "img",
      "title": "filter"
    },
    on: {
      "click": _vm.revealFilters
    }
  }, [_c('use', {
    attrs: {
      "xlink:href": "./static/svg/svgstore.svg#filter"
    }
  })]), _vm._v(" "), _c('ul', {
    staticClass: "filter-items",
    on: {
      "click": function($event) {
        _vm.onFilter($event)
      }
    }
  }, [_c('li', [_vm._v("all")]), _vm._v(" "), _c('li', [_vm._v("urban")]), _vm._v(" "), _c('li', [_vm._v("people")]), _vm._v(" "), _c('li', [_vm._v("portrait")]), _vm._v(" "), _c('li', [_vm._v("bnw")]), _vm._v(" "), _c('li', [_vm._v("landscape")])])]), _vm._v(" "), _c('div', {
    staticClass: "gallery",
    attrs: {
      "id": "gallery"
    }
  }, _vm._l((_vm.filtered), function(item) {
    return _c('div', {
      staticClass: "gallery-item"
    }, [_c('div', {
      staticClass: "caption"
    }, [_c('h5', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
      staticClass: "camera-settings"
    }, [_c('span', [_vm._v(_vm._s(item.settings.camera))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.settings.lenses))]), _vm._v(" "), _c('div', {
      staticClass: "lenses-settings"
    }, [_c('span', [_vm._v(_vm._s(item.settings.focal_length) + "mm")]), _vm._v(" "), _c('span', [_vm._v("ƒ/" + _vm._s(item.settings.aperture))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.settings.shutter_speed) + "s")]), _vm._v(" "), _c('span', [_vm._v("ISO " + _vm._s(item.settings.iso))])])])]), _vm._v(" "), _c('div', {
      staticClass: "img"
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: ('https://res.cloudinary.com/studio-nomade/image/upload/w_2000/' + _vm.sanitize(item.title)),
        expression: "'https://res.cloudinary.com/studio-nomade/image/upload/w_2000/' + sanitize(item.title)"
      }],
      attrs: {
        "data-srcset": 'https://res.cloudinary.com/studio-nomade/image/upload/w_800/' + _vm.sanitize(item.title) + ' 800w, ' +
          'https://res.cloudinary.com/studio-nomade/image/upload/w_1200/' + _vm.sanitize(item.title) + ' 1200w, ' +
          'https://res.cloudinary.com/studio-nomade/image/upload/w_2000/' + _vm.sanitize(item.title) + ' 2000w',
        "sizes": "(max-width: 984px) 100vw, 984px",
        "alt": item.title
      }
    })])])
  })), _vm._v(" "), (_vm.isMobile) ? _c('mt-actionsheet', {
    attrs: {
      "actions": _vm.actions,
      "cancelText": "CANCEL"
    },
    model: {
      value: (_vm.sheetVisible),
      callback: function($$v) {
        _vm.sheetVisible = $$v
      },
      expression: "sheetVisible"
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('left-bar', {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: (_vm.closeNav),
      expression: "closeNav"
    }]
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "mode": "out-in",
      "name": _vm.mainTransition
    }
  }, [_c('router-view')], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "navTrigger",
    on: {
      "click": _vm.openNav
    }
  }, [_c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('div', [_vm._v("MENU")])])
},staticRenderFns: []}

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "restaurant-menu-modal"
    }
  }, [_c('rmm-menu-items')], 1)
},staticRenderFns: []}

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "about view is-flexy is-center is-top is-column"
  }, [_c('h1', [_vm._v("The developer")]), _vm._v(" "), _c('p', {
    staticClass: "two-columns"
  }, [_c('img', {
    staticClass: "my-face",
    attrs: {
      "src": "/static/img/felipe-nobre-portrait-shot.png",
      "alt": "Felipe Nobre Portrait Shot"
    }
  }), _vm._v("\n\n    Hi there, my name is Felipe Nobre, I am a Front End Developer. I was born in Brazil but I call many places home. I moved to Italy when I was 17 years old and I am current living in Oxford, UK. "), _c('br'), _c('br'), _vm._v("\n\n    I have been developing websites for the past 7 years. I started my career working as a junior front end developer in a web agency in Milan.\n    I have always been a self-taught guy, learning everything by myself made/makes me have a better idea of my potential and limitations."), _c('br'), _c('br'), _vm._v("\n\n    After 3 years working in Milan I decided it was time for a change, so in 2013 I moved to London looking for the 'startup dream work'.\n    I got there eventually, working with "), _c('a', {
    attrs: {
      "href": "https://www.wazoku.com",
      "target": "_blank"
    }
  }, [_vm._v("Wazoku")]), _vm._v(" was an amazing experience."), _c('br'), _c('br'), _vm._v("\n\n    After that things just started to happen and I was already receiving great offers/opportunities and started to build my life in the UK.\n\n    In the past 3 years I had the opportunity to be part of great projects from different locations all around the world. "), _c('br'), _vm._v("\n\n    I don't really like the idea of listing projects and clients or having case studies. I prefer to show my skills working and showcasing personal\n    projects and experiments on Github.\n    "), _vm._v("\n\n    I would like to mention four projects tough, two of my firsts projects and two of the biggest clients I have worked with:\n\n    "), _c('br'), _c('br'), _vm._v(" "), _c('a', {
    attrs: {
      "href": "http://inovestills.com/",
      "title": "Inove Stills",
      "target": "_blank"
    }
  }, [_vm._v("Inove Stills")]), _vm._v(" and\n    "), _c('a', {
    attrs: {
      "href": "http://chalanamarket.co.uk/",
      "title": "Chalana",
      "target": "_blank"
    }
  }, [_vm._v("Chalana")]), _vm._v(" were the guys that first gave me the\n    opportunity to work as a freelancer in UK. "), _c('br'), _vm._v("\n    I couldn't expect that after that I would be developing a Wordpress Selling Platform for\n    "), _c('a', {
    attrs: {
      "href": "http://www.harpercollins.com.au/",
      "title": "Harper Collins Australia",
      "target": "_blank"
    }
  }, [_vm._v("Harper Collins Australia")]), _vm._v(" and\n    "), _c('a', {
    attrs: {
      "href": "http://www.panmacmillan.com.au/",
      "title": "Pan Macmillan Australia",
      "target": "_blank"
    }
  }, [_vm._v("Pan Macmillan Australia")]), _vm._v(".\n\n    "), _c('br'), _c('br'), _vm._v("\n\n    Being a Front End Developer is a constant learning life as I need to be up to date with the latest technologies and trends so I can offer the best.\n    That's why I keep my eyes on websites like: "), _c('strong', [_vm._v("Codrops")]), _vm._v(", "), _c('strong', [_vm._v("SmashMagazine")]), _vm._v(", "), _c('strong', [_vm._v("Tableless")]), _vm._v(", "), _c('strong', [_vm._v("UpLabs")]), _vm._v(", "), _c('strong', [_vm._v("TechCrunch")]), _vm._v(" and more."), _c('br'), _c('br'), _vm._v("\n\n    Check my code on "), _c('a', {
    attrs: {
      "href": "https://github.com/nobrefelipe",
      "title": "GITHUB",
      "target": "_blank"
    }
  }, [_vm._v("Github")]), _vm._v("\n    and have a look on my "), _c('router-link', {
    attrs: {
      "to": "/web-development",
      "title": "WEB DEVELOPMENT"
    }
  }, [_vm._v("Web Development")]), _vm._v(" page for more about my skills\n    then consider to "), _c('a', {
    attrs: {
      "href": "mailto:felipe@nomade.studio",
      "title": "HIRE ME"
    }
  }, [_vm._v("Hire me")]), _vm._v("!\n\n  ")], 1), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('h1', [_vm._v("The photographer")]), _vm._v(" "), _vm._m(0), _c('h3', [_vm._v("Instagram feed")]), _vm._v(" "), _c('p'), _vm._v(" "), _c('ul', {
    staticClass: "is-flexy is-wrap",
    attrs: {
      "id": "instafeed"
    }
  }, _vm._l((_vm.instafeed), function(item) {
    return _c('li', [_c('a', {
      attrs: {
        "href": item.link,
        "target": "_blank"
      }
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (item.images.low_resolution.url),
        expression: "item.images.low_resolution.url"
      }]
    })])])
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n\n    After three years in London, I decided that was time for a break. I got married with a old friend from Brazil and we decided to go travel South East Asia for a year."), _c('br'), _c('br'), _vm._v("\n\n    I started developing some good skills with my camera, I never thought I would like photography, now I love it. I learned how to master my camera and how to find the best shots.\n    In the beginning I was only into landscape photography, but now I cant stop thinking on street photography and black and white projects for the furure.\n    Being in Asia was a school for life. Understanding people and culture was critical to find places and take pictures that would make me proud."), _c('br'), _c('br'), _vm._v("\n\n    We spent an entire month travelling Vietnam from South to North, taking busy buses and collecting amazing experiences. In Vietnam I've got to love taking portrait pictures and being\n    around looking for something I wouldn't know until I get my lenses in front of my eyes."), _c('br'), _c('br')])
}]}

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "view lab"
  }, [_c('h1', [_vm._v("Lab")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "lab-collection is-flexy"
  }, [_c('restaurant-menu-modal')], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "is-text-center"
  }, [_vm._v("\n\n    Hi there, welcome to my Lab Page. Here you can find some personal projects and coding experiments that I put together both for pleasure and  learning new stuff.\n    "), _c('br'), _vm._v("\n    I like to go to websites like "), _c('a', {
    attrs: {
      "href": "https://site.uplabs.com/",
      "target": "_blank"
    }
  }, [_vm._v("Up Labs")]), _vm._v(" and see what designers are up to, and try to develop their ideas\n\n  ")])
}]}

/***/ }),
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
]),[42]);
//# sourceMappingURL=app.ec8a08bfee68d1b0269b.js.map