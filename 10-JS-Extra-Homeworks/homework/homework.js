// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz,
  // donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array = [];
  let i = 0;
  for(let elemento in objeto){
      array[i] = [elemento, objeto[elemento]];
      i++;
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el
  //número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || 
  //Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let arrayStr = new Set(string);
  let objeto = {};

  arrayStr.forEach(letra => {
    let acc = 0;
    
    for(let i = 0; i < string.length; i++)
      letra === string[i] && acc++;

    objeto[letra] = acc; 
  });

  return objeto;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y
  //mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let arrayStr = [...s];
  
  return(arrayStr.filter(elemento => (elemento === elemento.toUpperCase())).join("") + 
  arrayStr.filter(elemento => (elemento !== elemento.toUpperCase())).join(""))
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y 
  //la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || 
  //Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  /*
    return  (() => {
              let array = str.split(" ");

              let palabraRevez = array.map(elemento => {
                  let acc = "";
                  for(let i = elemento.length - 1; i >= 0; i--)
                      acc += elemento[i];
                  return acc;
              });
            
              return palabraRevez.join(" ");
    })();
  */
    return(() => {
      let array = str.split(" ");

      let palabraRevez = array.reduce((acc,elemento,index) => {
          for(let i = elemento.length - 1; i >= 0; i--)
              acc += elemento[i];
          return (index === array.length - 1 ? acc + "" : acc + " ");
      },"");
      return palabraRevez;
    })();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  /*
  FORMA 1:

  let numeroStr = numero.toString();
  let array = [];
  let arrayReverso = [];

  for(let i = 0; i < numeroStr.length; i++){
    array[i] = numeroStr[i];
    arrayReverso[i] = numeroStr[i];
  }

  arrayReverso.reverse();

  for(let i = 0; i < array.length; i++)
      if(array[i] !== arrayReverso[i]) return "No es capicua";

  return "Es capicua";
  */
  let numeroStr = numero.toString();
  let numeroComp = "";

  for(let i = numeroStr.length - 1; i >= 0; i--)
    numeroComp += numeroStr[i];
  
  return numeroComp.localeCompare(numeroStr) ? "No es capicua" : "Es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  /*
  let arrayCadena = [];

  for(let i = 0; i < cadena.length; i++)
    arrayCadena[i] = cadena[i];

  let nuevaCadena = arrayCadena.filter(elemento => (elemento != "a" && elemento != "b" && elemento != "c")) 
  
  return nuevaCadena.join("");
  */
  return cadena.replaceAll("a","").replaceAll("b","").replaceAll("c","");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente 
  //de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || 
  //Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  /*
  FORMA SIN METODOS:

  for(let i = 0; i < arr.length - 1; i++){
    let pos = i;
    let variable;
  
    for(let x = i + 1; x < arr.length; x++){
      if(arr[pos].length > arr[x].length){
        variable = arr[x];
        arr[x] = arr[pos];
        arr[pos] = variable;
        pos = x;
      }
    } 
  }
   return arr;
  */
   return arr.sort((a,b) => {
    if(a.length === b.length) return 0;
    if(a.length > b.length) return 1;
    if(a.length < b.length) return -1;
})
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, 
  //escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. 
  //(Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  return arreglo1.filter(elemento => (arreglo2.some(elemento2 => (elemento === elemento2))))  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};