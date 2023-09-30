
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

      // stopErrorSound() {
      //   const errorSound = document.getElementById('errorSound');
      //   errorSound.pause();
      //   errorSound.currentTime = 0; // Ripristina la posizione di riproduzione all'inizio
      // },

      addTask() {
        if (this.newTask.testo.length < 5) { 
          this.isError = true;
          setTimeout(() => {
            this.isError = false;
          }, 5000);

          const Sound = document.getElementById('errorSound');
          Sound.play();
        
        } else {
          this.tasks.unshift({ ...this.newTask }); // ho aggiunto un nuovo oggetto al posto della stringa
          this.newTask.testo = ''; // cancella solo il testo
          this.isError = false;
          const Sound = document.getElementById('addSound');
          Sound.play();
        }
      },

    
      removeTask(index) {
        const task = this.tasks[index];
        if (!task.done) {
          task.showDeleteError = true;

          const Sound = document.getElementById('errorSound');
          Sound.play();
          
          setTimeout(() => {
            task.showDeleteError = false;
          }, 5000);
        } else {
          this.tasks.splice(index, 1);
          const Sound = document.getElementById('trashSound');
          Sound.play();
        }
      },

    },

   
  }).mount('#app');
