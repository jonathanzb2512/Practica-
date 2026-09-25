const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const factorial = (numero) => {
  let resultado = 1;
  let operacion = '';

  for (let i = numero; i >=1 ; i--) {
        resultado = resultado * i
        operacion = operacion + i + ' × ';
        
     }
     console.log(`${resultado} * ${operacion}`)
     
}


rl.question('Ingrese el primer número: ', (respuesta) => {

  const numero = Number(respuesta)

  factorial(numero);

   rl.close();

});


