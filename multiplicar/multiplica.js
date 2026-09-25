const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const multiplicar = (nu1,nu2) => {
    const resultado = nu1 * nu2;

    return resultado
}


rl.question('Ingrese el primer número: ', (respuesta1) => {

  rl.question('Ingrese el segundo numero: ', (respuesta2) => {

    const numerox1 = Number(respuesta1);
    const numerox2 = Number(respuesta2);

    const resultadoM = multiplicar(numerox1, numerox2);

    console.log(`${respuesta1} * ${respuesta2} = ${resultadoM}`)

    rl.close();
  })

});


