

const { createApp } = Vue;

  createApp({
    data() {
      return {
        tasks: [
          {
            testo: 'Fare la spesa',
            done: false
          }
        ],

        newTask: {
          testo: '', // ho aggiunto oggetto newTask come un oggetto
          done: false
        },

        isError: false,
      }
    },

    methods: {
      addTask() {
        if (this.newTask.testo.length < 5) { // ho usato this.newTask.testo
          this.isError = true;
        } else {
          this.tasks.unshift({ ...this.newTask }); // ho aggiunto un nuovo oggetto al posto della stringa
          this.newTask.testo = ''; // cancella solo il testo
          this.isError = false;
        }
      },

      removeTask(index) {
        this.tasks.splice(index, 1)
      }
    }
  }).mount('#app');