
export const myfuncion = function suma(a,b){
    const suma=a+b
    return suma
}
export const relative = function children(surname, relative){
    // var relative2=structuredClone(relative)
    console.log("Happy")

}
export const family =[
    {nombre: "William", edad:43, domicilio: "Cedros"},
    {nombre: "Evelyn", edad:41, domicilio: "Purral"},
    {nombre: "Sandra", edad:30, domicilio: "Hatillo"},
    {nombre: "Daniela", edad:29, domicilio: "San Pedro"}
]
export const Gonzales =[
    {nombre: "Warner", edad:40, domicilio: "Cedros"},
    {nombre: "Joseph", edad:34, domicilio: "Sabanilla"},

]

export const generador = function alter(surname, hijo){
    var rateHijo=structuredClone(hijo)
    // console.log(hijo)
    // console.log(rateHijo[1].nombre)
    // console.log(apellido)
 
    for(let i=0; i<rateHijo.length; i++){
        // pariente.push({nombre:rateHijo[i].nombre,edad:rateHijo[i].edad, lugar:rateHijo[i].domicilio, apellido:surname})
        // console.log(`Nombre: ${hijo.nombre[1]} ${apellido}`)
        rateHijo[i].apellido=surname
    }
    console.log(hijo)
    console.log(rateHijo)
    return rateHijo
}
// export default {myfuncion,relative}
// var fechaNow=Date.now()
// console.log(fechaNow)
console.log("pendejo")