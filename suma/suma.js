const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



const sumar = (num1, num2) => {
  const resultado = num1 + num2

  return resultado;
}


rl.question('Ingrese el primer número: ', (respuesta1) => {

  rl.question('Ingrese el segundo numero: ', (respuesta2) => {

   

   const numero1 = Number(respuesta1);
   const numero2 = Number(respuesta2);

   const resultado = sumar(numero1, numero2);
   console.log(`${respuesta1} + ${respuesta2} = ${resultado}`)

    rl.close();
  })

});


