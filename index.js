//                                          importantísimo el .js o lo que corresponda
import CONSTANTS from "./constants/constants.js";

const divPersonajes = document.getElementById("personajes");

//      armar mi string a través de constantes (las estoy declarando en el archivo constants.js)
//                                                paginado, relacionado con algo que se llama "lazy loading" -> p/evitar que la carga de datos se inmensa para el usuario y p/que sea rápida la respuesta del servidor
fetch(`${CONSTANTS.API_URL}${CONSTANTS.CHARACTERS}?page=3`) // fetch me devuelve un objeto tipo Response
  //puedo usar el .then() porque fetch() me devuelve una promesa
  //                          decodificar el body de la respuesta y convertirlo a json con el método .json() -> me devuelve una promesa
  .then((response) => response.json())
  //como .json() me devuelve otra promesa, necesito concatenar otro .then()
  //     acá recién podría obtener los resultados
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

  // tomar la info que está arriba y mostrársela al usuario en un html -> manejando el DOM 
  // crear para que la petición que está arriba (fetch()) llegue al navegador
