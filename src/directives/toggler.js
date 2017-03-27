import Vue from 'vue';
import  $  from  'jquery';

// creates v-toggler
Vue.directive('toggler', {

    inserted: function (el, binding, vnode) {

        //console.log(binding);

        $(el).click(function () {

            $(this).toggleClass(binding.value);

        });


    }

});