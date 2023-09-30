
const { createApp } = Vue;

  createApp({
    data() {
      return {
        tasks: [
          {
            testo: 'Fare la spesa',
            done: false,
            showDeleteError: false
          },
          {
            testo: 'Giocare a pallone',
            done: false,
            showDeleteError: false
          },
          {
            testo: 'Studiare Vue.js',
            done: false,
            showDeleteError: false
          }
        ],

        newTask: {
          testo: '', // ho aggiunto oggetto newTask come un oggetto
          done: false,
          showDeleteError: false
        },

        isError: false,
        
      }
    },

    methods: {
      addTask() {
        if (this.newTask.testo.length < 5) { 
          this.isError = true;
        } else {
          this.tasks.unshift({ ...this.newTask }); // ho aggiunto un nuovo oggetto al posto della stringa
          this.newTask.testo = ''; // cancella solo il testo
          this.isError = false;
        }
      },

      removeTask(index) {
        const task = this.tasks[index];
      if (!task.done) {
        task.showDeleteError = true; 
      } else {
        this.tasks.splice(index, 1);
      }
        
      },

    }
  }).mount('#app');
  console.log();