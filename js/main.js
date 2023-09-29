
const {createApp} = Vue;

createApp ({
  data() {
    return {
      tasks: [
        'Fare la spesa',
        'Studiare Vue',
        'Comprare il vino'
      ],
    }
  }




}).mount('#app');