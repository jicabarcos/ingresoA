/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	
	let nombre, temp, sexo, edad, mayorTemp, nombreMayorTemp, edadProm;
	let cantTotal = 0;
	let cantM = 0;
	let cantF = 0;
	let flagTemp = 0;
	let sumaEdad = 0;

	for(i = 0 ; i < 5 ; i++){

		alert(`PACIENTE N°${i+1}:`);

		nombre = prompt("Ingrese nombre del paciente:");


		temp = parseInt(prompt("Ingrese temperatura:"));

		sexo = prompt("Ingrese sexo:");
		sexo = sexo.toUpperCase();

		while ((sexo != "M") && (sexo != "F")){

			sexo = prompt('Debe ser "M" o "F". Vuelva a ingresar:');	
			sexo = sexo.toUpperCase();
	
		}


		edad = parseInt(prompt("Ingrese edad:"));

		while ((edad < 0) || (isNaN(edad))){

			edad = parseInt(prompt("Ingrese una edad válida:"))

		}


		// CANTIDAD TOTAL DE PERSONAS
		cantTotal++;


		// CANTIDAD DE CADA SEXO Y MUJER CON MAYOR TEMPERATURA|
		if (sexo == "M"){

			cantM++;
			
		}
		else {

			cantF++;
			if ((flagTemp == 0) || (temp > mayorTemp)){

				mayorTemp = temp;
				nombreMayorTemp = nombre;
				flagTemp = 1;
	
			}

		}
		

		// SUMA EDADES
		sumaEdad += edad;	

	}

	edadProm = sumaEdad / cantTotal;


	// MUESTRO LOS DATOS SOLICITADOS


	// A
	console.log(`Fueron ingresados ${cantM} hombres y ${cantF} mujeres.`);

	// B
	console.log(`Los pacientes tienen una edad promedio de ${edadProm} años.`);

	// C
	if (cantF != 0){
		
		console.log(`La mujer con más temperatura es ${nombreMayorTemp} con ${mayorTemp}°C.`);

	}
	else{

		console.log(`Ninguna mujer ingresó al hospital.`);

	}
	
}
