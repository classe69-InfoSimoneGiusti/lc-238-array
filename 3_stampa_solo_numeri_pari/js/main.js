const numeri = [1, 5, 10, 20];
//voglio che il mio programma stampi solo i valori 10 e 20, ovvero quelli pari

for (let i = 0; i < numeri.length; i++) {

    if (numeri[i] % 2 == 0) {
        console.log(numeri[i]);
    }

}