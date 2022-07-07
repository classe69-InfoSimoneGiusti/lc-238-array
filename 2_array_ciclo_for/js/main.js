const studenti = ['mario', 'rosa', 'giuseppe', 'sara', 'pippo', 'pluto'];

// scrivo un ciclo dove inizializzo il contatore a 0 (che rappresenta l'indice del primo elemento del mio array)
// grazie al ciclo, scorro l'array incrementanto il contatore di 1 unità, fintanto che il mio contatore è minore della lunghezza dell'array


for ( let i = 0; i < studenti.length; i++) {
    console.log(i, studenti[i]);
}