const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



const restar = (n1, n2) => {
  const resultado = n1 - n2;

  return resultado
}


rl.question('Ingrese el primer número: ', (resultado1) => {

  rl.question('Ingrese el segundo numero: ', (resultado2) => {

   const numero1 = Number(resultado1);
   const numero2 = Number(resultado2);

   const resultado = restar(numero1, numero2);
   console.log(`${resultado1} - ${resultado2} = ${resultado}`)

    rl.close();
  })

});


