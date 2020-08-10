/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{

  let marca, precio, peso, tipo, precioLiqCaro, marcaLiqCaro, pesoSolLiv, marcaSolLiv;
  let i = 0;
  let contSol = 0;
  let contLiq = 0;
  let pesoTotal = 0;
  let flagLiqCaro = 0;
  let flagSolLiv = 0;

  do{

    i++;
    alert(`PRODCUTO N°${i}:`)

    // INGRESO DE DATOS
    marca = prompt("Ingrese marca:");
    marca = marca.toUpperCase();


    precio = parseFloat(prompt("Ingrese precio:"));


    peso = parseFloat(prompt("Ingrese peso"));


    tipo = prompt("Ingrese tipo:");
    while ((tipo != "solido") && (tipo != "liquido")){

      tipo = prompt("Debe ser solido o liquido. Vuelva a ingresar:");

    }

    // CONTADORES POR TIPO
    if (tipo == "solido"){

      contSol++;

    }
    else{

      contLiq++;

    }

    // PESO TOTAL
    pesoTotal += peso;

    // LIQUIDO MAS CARO
    if ((tipo = "liquido") && ((flagLiqCaro == 0) || (precio > precioLiqCaro))){

      precioLiqCaro = precio;
      marcaLiqCaro = marca;
      flagLiqCaro = 1;

    }

    // SOLIDO MAS LIVIANO
    if ((tipo = "solido") && ((flagSolLiv == 0) || (peso < pesoSolLiv))){

      pesoSolLiv = peso;
      marcaSolLiv = marca;
      flagSolLiv = 1;

    }

    // PREGUNTA PARA CONTINUAR
    seguir = prompt('Desea seguir ingresando productos? ("no" para frenar)');


  } while (seguir != "no");


  // MUESTRO LOS DATOS SOLICITADOS


  // A
  console.log(`El peso total de la compra es de ${pesoTotal} kg.`);

  // B
  console.log(`El líquido más caro es el de la marca "${marcaLiqCaro}", con un precio de $${precioLiqCaro}.`);

  // C
  console.log(`El sólido más liviano es el de la marca "${marcaSolLiv}", con un peso de ${pesoSolLiv} kg.`);

  

}
