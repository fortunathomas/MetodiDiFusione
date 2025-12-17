const LUNGHEZZA_ARRAY = 20;

let array1 = creaArray();
let array2 = creaArray();
let array3 = creaArray();

//Funzione per creare gli array
function creaArray() {
    let array = [];
    for (let i = 0; i < LUNGHEZZA_ARRAY; i++) {
        array[i] = Math.floor(Math.random() * 100);
    }
    return array;
}


//Funzione bubble sort
function ordinaBubble(array) {
    let lArr = array.length-1;
    while (lArr > 0) {
        for (let i = 0; i < lArr; i++) {
            if (array[i] > array[i + 1]) {
                let nTemp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = nTemp;
            }
        }
        lArr--;
    }
}

//Funzione insertion sort
function ordinaInsert(array) {
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = temp;

    }
}


//Funzione selection sort
function ordinaSelect(array) {
    for (let i = 0; i < array.length -1; i++) {
        let minimo = i;
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[minimo]) {
                minimo = j;
            }
        }

        if (minimo !== i) {
            let temp = array[i];
            array[i] = array[minimo];
            array[minimo] = temp;
        }
    }
}

/* -----------------------------------------------------------------------------------  OTHER  ----------------------------------------------------------------------------------- */
//Funzione per formattare un array
function formattato(array) {
    let nuovoArray = "";
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            nuovoArray += array[i];
        } else {
            nuovoArray += array[i] + ", ";
        }
        if (i % 10 === 0 && i !== 0) {
            nuovoArray += "\n";
        }
    }
    return nuovoArray;
}


//Funzione per inserire gli array nell'html
function htmlArray(array1, array2, array3) {
    let div = document.getElementById("array");
    let a1 = document.createElement("h3");
    let a2 = document.createElement("h3");
    let a3 = document.createElement("h3");

    a1.innerText = 'Array 1 (Bubble Sort):\n' + formattato(array1);
    a2.innerText = 'Array 2 (Insertion Sort):\n' + formattato(array2);
    a3.innerText = 'Array 3 (Selection Sort):\n' + formattato(array3);
    div.appendChild(a1);
    div.appendChild(a2);
    div.appendChild(a3);
}


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

//Chiamo le funzioni
function init() {
    ordinaBubble(array1)
    ordinaInsert(array2);
    ordinaSelect(array3);
    htmlArray(array1, array2, array3);
}

window.addEventListener("DOMContentLoaded", init);
