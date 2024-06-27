// const { createApp } = Vue;

// createApp({
//    data() {
//       return {
//          
//       }
//    },
//    methods: {
      
//    },
//    mounted() {
//       console.log("ciao ho appena finito di montare la tua app!");
//       createEmails(10);
//    },
// }).mount('#app');

const app = Vue.createApp({
   data(){
      return {
         email: '',
         emails: []           
      }
   },
   methods: {

   },
   mounted() {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
         .then(function (call){
            this.email = call.data.response;
            console.log(email);
         }).catch(
            function (error) {
               console.log(error);
            }
         );
   }
})


app.mount('#app')