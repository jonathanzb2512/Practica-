const readline = require('readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const takeNumber = async(number) => {

  while (number > 10 || number < 1) {
    
  }

}

const respuesta = await rl.question('Ingrese un numero de 1 a 10: ', (numero) => {

  const respuestaU = Number(numero)

  const respuesta = takeNumber(respuestaU)
  
      rl.close();
  
});


