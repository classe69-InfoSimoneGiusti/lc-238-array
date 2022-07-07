const studenti = ['mario', 'rosa', 'giuseppe', 'sara', 'pippo', 'pluto'];

// voglio accedere all'elemento Giuseppe di studenti
console.log( studenti[2] );

// richiesto un numero che rappresenti l'indice di studenti, mostro il nome dello studente in quella posizione

const indiceMassimo = studenti.length - 1;
const posizione = parseInt(prompt('Scegli un numero compreso tra 0 e ' + indiceMassimo));

if (isNaN(posizione) || posizione < 0 || posizione > indiceMassimo) {
    alert('valore inserito non valido!');
} else {
    alert(studenti[posizione])
}

