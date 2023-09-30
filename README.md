# vue-todolist

### consegna: Rifare l’esercizio della to do list fatto in classe. Questa volta però ogni todo sarà un oggetto, formato da due proprietà: - text, una stringa che indica il testo del todo - done, un booleano (true/false) che indica se il todo è stato fatto oppure no --- MILESTONE 1 --- Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato. --- MILESTONE 2 ---Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista. --- MILESTONE 3 ---Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

#### pseudocodice: 
1. Creare layout in html (come abbiamo fatto in classe).
2. Creare un'applicazione Vue.
3. Definire i dati iniziali: un array di oggetti con dentro un testo in stringa e un valore booleano.
4. Aggiungere un pulsante "Aggiungi" con un gestore click chiamato "addTask"
5. Creare una funzione "removeTask" per rimuovere un task dall'array "tasks"



### Bonus 1: se il todo ha meno di 5 caratteri esporre un messaggio di errore 

#### pseudocodice: 
1. Creare una condizione nella funzione addTask() che tramite un valore booleano (isError) controlli la lunghezza di ogni testo nuovo.

### Bonus 2: cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
#### pseudocodice: 
1. Usare il valore booleano "done" nel @click sull'elemento "li": true è uguale al false.

### Bonus 3: eliminare il todo solo se è stato svolto, altrimenti esporre un messaggio di errore

#### pseudocodice: 
1. Usare l'espressione ternaria nel @click dell'elemento "i": il click elimina task solo se task.done è true.
2. Impostare @click.stop nell'elemento "i". 
3. Creare un span con dentro il messaggio di errore.
4. Aggiungere una proprietà booleanian (di default false) a ciascun oggetto task nell'array tasks.
5. Mettere questa proprietà all'interno della funzione removeTask().
6. Aggiungiamo una condizione nella removeTask per la quale se task.done è true la proprietà booleaniana diventa true.
7. Aggiungere questa proprietà booleanina nello span di messaggio di errore in html.



