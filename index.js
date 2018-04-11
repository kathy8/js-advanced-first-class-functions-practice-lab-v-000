// Code your solution in this file!
//logs the name of each driver 
//logDriverNames() — Receives an array of driver objects 
//and logs the name attribute of each driver to the console.
function logDriverNames(drivers){
  drivers.forEach(calback);
}

const calback=function (el,i,array){
  console.log(el.name);
};