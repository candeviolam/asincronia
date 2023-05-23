//                                          importantísimo el .js o lo que corresponda
import CONSTANTS from "./constants/constants.js";
//      no necesito ya el CrearTarjetas acá
import { GetCharacters } from "./services/characters_service.js";

const divPersonajes = document.getElementById("personajes");

//ahora vamos a crear lo que nos. necesitamos para paginar -> para traer c/u de los personajes
//necesitamos que se vaya modificando la página -> vamos a convertir page en una variable

//                                                la page que estaba acá escrita a mano
fetch(`${CONSTANTS.API_URL}${CONSTANTS.CHARACTERS}?page=3`)
  .then((response) => response.json())
  .then(({ results }) => {
    //me llevo el htmlString y el forEach que tenía acá para el characters_service -> lo meto en una variable y lo importo acá para limpiar código
    
    //ésto me devuelve el string const html = GetCharacters(results);
    const html = GetCharacters(results);
    divPersonajes.innerHTML = html;
  })
  .catch((err) => console.log(err));


  
