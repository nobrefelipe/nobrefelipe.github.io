//Lets import our bus so we can Emit events from this component to others
import bus from '../../bus';

export default {

    name: 'products',

    props: ['products'],

    data() {

        return {}

    },

    mounted: function () {



    },

    // methods: {
    //
    //      onSubmit(event){
    //
    //          //check if the field is filled
    //          if(this.username && this.username !== ''){
    //
    //              //emits a 'new-username' object with the username value through our bus
    //              bus.$emit('new-username', this.username);
    //
    //          }
    //
    //      }
    //
    // }

}