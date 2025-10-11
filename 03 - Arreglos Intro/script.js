var alumnos = [
    "Carlos Manuel",
    "Cesar Oziel",
    "Regina",
    "Diego Leonardo",
    "Andrea Carolina",
    "Mayela Mayté",
    "Eder Abraham",
    "Diego Alonso",
    "Naomi Michelle",
    "Eder Abisai",
    "Regina", //Dariela
    "Carlos", //Manuel
    "Carlos" //Alejandro
,];

//elimina el ultimo elemento del arreglo
alumnos.pop();

//Agregar 
alumnos.push("Edgar Aurelio");

//elimina al inicio
alumnos.shift();

//Agrega al inicio
alumnos.unshift("Axel Gabriel");

//Cambia valor de elemento
alumnos[4]=  "Carlos Manuel";


console.log(alumnos.indexOf("Eder Abisai"));
console.log(alumnos.includes("Alejandro"));

console.log(alumnos.find(nombre => nombre == "Regina"));
//Equivale a 
// for(var i = 0; i <alumnos.length; i++){
//     if(alumnos[i] == "Regina"){
//         console.log(alumnos[i]);
//         break;
//     }
// }

console.log(alumnos.findIndex(nombre => nombre=="Regina"));
// for(var j= 0; j < alumnos.length; j++){
//     if(alumnos[j] == "Regina"){
//         console.log(j);
//         break;
//     }
// }
