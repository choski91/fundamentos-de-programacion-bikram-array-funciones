//ejercicio 1
let arrayVacio = [];

//ejercicio 2
let arrayNumeros =[0,1,2,3,4,5,6,7,8,9];

//ejercicio 3
let arrayNumerosPares =[0,2,4,6,8];

//ejercicio 4
let arrayBidimensional =  [[0, 1, 2], ['a', 'b', 'c']];

//ejercicio 5

function suma (a, b) {
  return a + b;
};

//ejercicio 6

function potenciacion(a, b) {
  return a**b;
}

//ejercicio 7
function separarPalabras(hola) {
  return hola.split (" ");
};

//ejercicio 8
function repetirString(string, numero) {
  let total = "";
  for (let i = 0; i < numero ; i++) {
    total += string;
  }
  return total;
};

//ejercicio 9
function esPrimo(num) { 
  for (let i = 2; i <= num-1 ; i++) {
    if(num%i == 0 ){
    return false;
    }
  }
    return true;
};

//ejercicio 10
 function ordenarArray(numeros) {
    return numeros.sort((a, b) => a - b);
    
  };
 
//ejercicio 11
function obtenerPares(array) {
  let numPares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numPares.push(array[i])
    }
 
  }
  return numPares;
};

//ejercicio 12
const pintarArray = (arr) => {
  let resultado = "[";
   for (let i = 0; i < arr.length; i++) { //
        if( i < arr.length - 1) 
            resultado += arr[i] + ", ";
        else
            resultado += arr[i]; 
    }
    resultado += "]";

    return resultado;
};

//ejercicio 13
function  arrayMapi(array, funcion) {
   let arrayYfuncion = [];
   for (let i = 0; i < array.length; i++) {
    arrayYfuncion[i] = funcion(array[i]);
    
   }
   return arrayYfuncion;
};

//ejercicio 14
function eliminarDuplicados(arr) {
    let datos = []; 
    for (let i = 0; i < arr.length; i++) {  
        let num = arr[i];                 
        let encontrado = false;           
        
    for (let j = 0; j < datos.length; j++) {
      if(datos[j] == num){
              encontrado = true;
                break;
          }       
        }
        if(encontrado == false){
            datos.push(num);
        }
    }
    return datos;
};

//ejercicio 15
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//ejercicio 16
let holaMundo = ["Hola", "Mundo"];

//ejercicio 17
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

//ejercicio 18
arrayDeArrays = [[756, "nombre"], [225,"apellido"], [298, "direccion"]];

//ejercicio 19
function multiplicacion (numeroUno, numeroDos) {
 return numeroUno * numeroDos;
};

//ejercicio 20 
function division (NumeroUno, NumeroDos) {
  return NumeroUno / NumeroDos;
};

//ejercicio 21
function esPar(num1) {
  if (num1 % 2 == 0) {
    return true;
  } else {
    return false;
  }

};

//ejercicio 22
function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function multiplicacion(a, b) {
  return a * b;
}
 arrayFunciones = [suma, resta, multiplicacion];

//ejercicio 23
function ordenarArray2(arrnum) {
  return arrnum.sort(function (a, b) {
    return b - a;
  });
};

//ejercicio 24
function obtenerImpares(conjarr) {
  let numImpares = [];
  for (let i = 0; i < conjarr.length; i++) {
    if (conjarr[i] % 2 !== 0 ) {
       numImpares.push(conjarr[i])
    }
  }
  return numImpares;
};

//ejercicio 25
function sumarArray(NumericoArray) {
  let sumNum = 0;
  for (let i = 0; i < NumericoArray.length; i++) {
    sumNum += NumericoArray[i];
  }
  return sumNum;
};

//ejercicio 26

function multiplicarArray(arrI) {
  let multi = 1;
  for (let i = 0; i < arrI.length; i++) {
  multi *= arrI[i];
    
  }
  return multi;
};