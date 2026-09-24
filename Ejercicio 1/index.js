const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tablasMultiplicar = (inicio, fin) => {
  for (let i = inicio; i <= fin; i++) {
    tablaMultiplicar(i);
    
  }
}

const tablaMultiplicar = (numero) => {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} * ${i} = ${numero * i}`, )
      
     }
}


rl.question('Ingrese el primer número: ', (respuesta) => {

    rl.question('Ingrese el segundo número: ', (respuesta2) => {

      const inicio = Number(respuesta);
      const fin = Number(respuesta2);
      
        tablasMultiplicar(inicio, fin);
        rl.close();
    });

});