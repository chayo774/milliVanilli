// alert("working")
'use Strict'
import {myfuncion, relative, family, Gonzales, generador} from "./funciones.js"
const number =2.5
console.log(number, typeof(number))
const numberTwo=number.toString()
console.log(numberTwo, typeof(numberTwo))
const suma=number+3
console.log(suma)
const number3=number.toFixed()
console.log(number3,typeof(number3) )
console.log(myfuncion(3,5))
console.log(relative())
generador("Muñoz", family)
// const course= {
//     tecnicas:["Digitación", "programacion", "Soporte tecnico"],
//     regulares:["Matemáticas", "Español", "Ciencias"]
// }
// for(let i=0; i<course.length; i++){

// }
function printRelative(son){
    console.log("***** Children *****")
    console.log("Nombre", son.nombre)
    console.log("Apellido", son.apellido)
    console.log("Edad", son.edad)
    console.log("Domicilio", son.domicilio)
}
let child=generador("Muñoz", family)//Genera un nuevo objeto con el apellido 
child.forEach(printRelative)//itera
let gonzales=generador("Castro Gonzales", Gonzales)
gonzales.forEach(printRelative)
//Otra forma de recorrerlo: https://es.stackoverflow.com/questions/564565/recorrer-objeto-de-objetos
for(var element of child){
    console.error(element.edad)
}
//Add It to the list
// In this puzzle, you'll complete the getRatings() function declaration. This function will save the hotel ratings to an array rather than only logging them to the console.
function keepEdad(hotelList){
    let edades =[]
    for(let element of hotelList){
        edades.push(element.edad)
    }
    return edades
}
console.log("Ratings Array")
console.log(keepEdad(child))
//Split up Evenly:
// In this puzzle, you'll complete the average() function declaration.
// First, you'll add up all the values in an array. Then, you’ll divide the sum of all the items by the length of the array.
function average(array){
    let total = 0;
    for(let element of array){
        total+=element;
    }
    return total/array.length
}
let edadesMuñoz = keepEdad(child)
console.log("The average is:")
console.log(average(edadesMuñoz))
//It will Average Out: 
// In this puzzle, you'll update the averageRating function declaration to use a hotelList, get its ratings, and then return the average() of those ratings.
// The average() function that you created in the last puzzle is imported in the beginning of the code. You can use it to find the average value of the ratings.
// function averageRating()
// For the Righte Price:
// In this puzzle, you'll filter the Grassland hotels to show only the hotels with a price of less than $100 a night. Then, you’ll find the average rating of the affordable Grassland hotels.

// import { getData, findHotels } from 'grasshopper.reviews';
// import { averageRating } from 'myFunctions';
// let grasslandHotels = getData('Grassland', findHotels, ___);
// function underAHundred(hotel, ___) {
//   return hotel.price < 100;
// };
// let affordableHotels = grasslandHotels.filter(underAHundred);
// ___
// console.log('Average Rating in Grassland under $100:');
// console.log(averageRating(affordableHotels, ___));

//Solucion Average Rating in Grassland under $100:
//3.25

// Nailted
//A parameter is used when declaring the function.An argument is used when calling a function.
