//                                          importantísimo el .js o lo que corresponda
import CONSTANTS from "./constants/constants.js";
import { CrearTarjetas } from "./services/characters_service.js";

const divPersonajes = document.getElementById("personajes");

fetch(`${CONSTANTS.API_URL}${CONSTANTS.CHARACTERS}?page=3`)
  .then((response) => response.json())
  //     acá si o si recibo el obj res, pero al obj res le estoy haciendo destructuring de results (en la 1era respuesta hago destructuring de results) -> "results" aparece en la documentación de la API -> poniendo el destruct de results en lugar de res: evito tener el obj info (en la consola aparece), y me muestra directamente el array de results -> todo está en la documentación que estoy sacando de la API
  .then(({ results }) => {
    // uso ésto porque como estoy creando strings y no nodos en el CrearTarjs en services, no me lo va a reconocer y no voy a poder hacer el appendChild que va abajo, y lo cambio por un divPersonajes.innerHtml..; y por éso tmb el htmlString += de abajo, en lugar de una constante
    let htmlString = "";
    // como results es un array, lo puedo trabajar con forEach
    //      el forEach por dentro hace un recorrido, que ejecuta una función, esa func recibe por paráms c/u de los elems que estoy recorriendo
    //               me devuelve c/u de los personajes en este caso
    results.forEach((personaje) => {
      //                                     por ahora le paso null porque no lo estoy usando(?
      htmlString += CrearTarjetas(personaje, null);
      divPersonajes.innerHTML = htmlString;
    });
  })
  .catch((err) => console.log(err));