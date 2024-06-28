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
         emails: [],        
      }
   },
   methods: {

   },
   mounted() {
      for (let i = 0; i < 10; i++) {
         axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
         .then(call => {
            const result = call.data.response;
            console.log(result);

            this.emails.push(result);
         }).catch(
            function (error) {
               console.log(error);
            }
         );
      }
   }
})


app.mount('#app')