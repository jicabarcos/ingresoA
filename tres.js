/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{

	let titular, lugar, temporada, pasajeros, masPasajeros, titularMasPasajeros;
	let seguir, lugarMasElegido, cantMasElegido, promInvierno;
	let i = 0;
	let cantBari = 0;
	let cantCata = 0;
	let cantSalta = 0;
	let flagTitular = 0;
	let cantInvierno = 0;
	let pasajerosInvierno = 0;

	do{

		i++;
		alert(`VIAJE N°${i}:`);

		// INGRESO DE DATOS
		titular = prompt("Ingrese nombre del titular:");


		lugar = prompt("Ingrese nombre del destino:");
		while ((lugar != "bariloche") && (lugar != "cataratas") && (lugar != "salta")){

			lugar = prompt('Los destinos son "bariloche", "cataratas" y "salta". Elija uno de los tres:');
			
		}


		temporada = prompt("Ingrese temporada del viaje:");
		while ((temporada != "otoño") && (temporada != "invierno") && (temporada != "verano") && (temporada != "primavera")){

			temporada = prompt("Puede elegir entre las 4 estaciones. Vuelva a ingresar:");
		
		}


		pasajeros = parseInt(prompt("Ingrese cantidad de personas que viajan:"));
		while ((pasajeros <= 0) || (isNaN(pasajeros))){

			pasajeros = parseInt(prompt("Debe ingresar una cantidad válida:"));

		}

		// CANTIDAD DE VECES QUE FUE ELEGIDO CADA LUGAR
		switch(lugar){

			case "bariloche":

				cantBari++;
				break;
			
			case "cataratas":

				cantCata++;
				break;

			case "salta":

				cantSalta++;
				break;

		}

		// TITULAR CON MAS PASAJEROS
		if ((flagTitular == 0) || (pasajeros > masPasajeros)){

			masPasajeros = pasajeros;
			titularMasPasajeros = titular;
			flagTitular = 1;
	  
		}

		// PERSONAS QUE VIAJAN EN INVIERNO
		if (temporada == "invierno"){

			cantInvierno++;
			pasajerosInvierno += pasajeros;

		}


		seguir = prompt('Desea seguir haciendo ingresos? ("no" para finalizar)');

	} while (seguir != "no");

	// LUGAR MÁS ELEGIDO
	if ((cantBari > cantCata) && (cantBari > cantSalta)) {

		lugarMasElegido = "bariloche";
		cantMasElegido = cantBari;
		
	}
	else if ((cantCata >= cantBari) && (cantCata > cantSalta)) {

		lugarMasElegido = "catamarca";
		cantMasElegido = cantCata;


	}
	else {

		lugarMasElegido = "salta";
		cantMasElegido = cantSalta;


	}

	// PROMEDIO DE PASAJEROS INVIERNO
	promInvierno = pasajerosInvierno / cantInvierno;


	// MUESTRO LOS DATOS SOLICITADOS


	// A
	console.log(`El lugar más elegido es ${lugarMasElegido}, con un total de ${cantMasElegido} viajes.`);

	// B
	console.log(`El titular con más pasajeros es ${titularMasPasajeros}, con ${masPasajeros} personas a su nombre.`);

	// C
	console.log(`El promedio de personas que viajan en invierno es de ${promInvierno} por viaje.`);



}
