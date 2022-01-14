// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var array = [0,1,2,3,4 ];
  return(array[0]);

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var array = [0,1,2,3,4,5];
  return (array [array.length - 1]);

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var array = [0,1,2,3,4,5]
  return (array.length)
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  array = [2,3,4,5,6]
  for (i=0;i < array.length; i++){
    array [i] = [i] * 2 ;
  } 
  return array 
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array [1,2,3,4];
  array.push (elemento);  
  return (array);


}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array [1,2,3,4];
  array.unshift(elemento);
  return array 
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  palabras = [ "Hellow" , "World" ]  
  return array.length + ("!")
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  array = [1,2,3, elemento];
  for (i=0; i < 4; i++){
    if (array[i] === elemento){
     return true;
    } else {
      return false;
    }
  }
} 


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
   numeros =[1,2,3,4,5,6]
  for (i=1;i < 6 ; i++){
    const sumadenteros =[ numero[i] + numero[i + 1]]
 return  sumadenteros
  }

   
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  resultadosTest =[1,2,3,4,5,6]
  for (i=0; i <= resultadosTest; i++){
  var sumadeenteros = [ numero[i] + numero[i + 1]];
  var promedio = sumadeenteros / resultadosTest.length;
  return promedio 
  }
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  numeros =[1,2,3]

  if (numeros[0] < numeros[1]){

     if (numero [2] < numero[1]){

        return ("es el mayor " + num[1])
     } 
  }  else if  (numero[0] > numero[1]){
         if(numero [0] > numero[2]){
        return ("es el mayor " + numero[0])
    } 
    else {
      return ("es el mayor" + numero[2])
    }
  } 
  
}


function multiplicarArgumentos(array) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
   
array = [1,2,3,4];
for (i=0; i < 3 ; i++){
  return arguments[i] * (arguments[i] + 1) ;
}
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
  if (array.length > 17){
 return array.length
  } 

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  numeroDeDia = ["Lunes","Martes","Miercoles","Jueves","Vienres","sabado","Domingo"];
  for (i=0;i < 7 ; i++){

  if (numeroDeDia[i] < numeroDeDia[5]){
    return ("Es dia de laborar")
  } 
  else {
    return ("Es fin de semana")
  }
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí:

  const Numeros = [1,2,3,4,5,6,7,8,9]
  for (i=0;i < 9 ; i++){
      


}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  arreglo = [1,2,3,4,5]

  for (i=0; i < 5 ; i++ ){
    if (arreglo[i] === arreglo[i+1] ){
      return true
    }
    else {
      return false 
    }
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  array =["Enero","mayo","marzo","septiembre","Junio","Noviembre","octubre", "diciembre"];

  for (i=0; i < 8 ; i++ ){
     
    if (array[i] == "Enero" || "Marzo" || "Noviembre" ){

      var MesesGuardados = []
      MesesGuardados.push(array[i])

    } else {
      return ("No se encontraron los mese pedidos")
    }

  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:s
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
