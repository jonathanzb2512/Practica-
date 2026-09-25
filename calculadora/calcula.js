const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculadora = (n1, n2, opcion) => {
    const sumar = n1 + n2;
    const restar = n1 - n2;
    const multiplicar = n1 * n2;

    if (opcion === 1) {
      return sumar
    } else if (opcion === 2) {
      return restar
    }else if ( opcion === 3) {
      return multiplicar
    }
}

rl.question('Ingrese el primer número: ', (dato1) => {

  rl.question('Ingrese el segundo numero: ', (dato2) => {
      rl.question('Ingrese un numero del 1 al 3 : ', (opcion) => {
            const numero1 = Number(dato1);
            const numero2 = Number(dato2);
            const opcionU = Number(opcion);

            let nombreOperacion;

            if (opcionU === 1) {
              nombreOperacion = 'suma';
          } else if (opcionU === 2) {
              nombreOperacion = 'resta';
          } else if (opcionU === 3) {
              nombreOperacion = 'multiplicación';
          }

        if(opcionU > 3 || opcionU < 1) {
          console.log('este numero no esta permitido');
          rl.close();
        } else {

            const resultado = calculadora(numero1, numero2, opcionU);
            console.log(`la operacion que escogiste es ${nombreOperacion} y el resultado es ${resultado}  `)

            rl.close();
        }
        
    })
  })
  
});
