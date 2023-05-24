//                                          importantísimo el .js o lo que corresponda
import { CONSTANTS, ERRORS } from "./constants/constants.js";
//      no necesito ya el CrearTarjetas acá
import { GetCharacters } from "./services/characters_service.js";

const divPersonajes = document.getElementById("personajes");

//ahora vamos a crear lo que nos. necesitamos para paginar -> para traer c/u de los personajes
//necesitamos que se vaya modificando la página dinámicamente -> vamos a convertir page en una variable
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");

const search = document.getElementById("search");

let page = 1;
let name = ""; // tip p/unir los fetch -> si name es "" (string vacío), undefined o null, busco por página , por ej

// no puede acceder a FetchData antes de que sea inicializada porque es tomada como una variable -> tengo que declararla arriba antes de queres usarla y recién abajo de ella llamarla

//vamos a utilizar el fetch con await
//                así se declara la función de flecha asíncrona -> con el async antes de los ()
const FetchData = async () => {
  //                                                                        acá estaba escrita la pag a mano
  const response = await fetch(
    `${CONSTANTS.API_URL}${CONSTANTS.CHARACTERS}?page=${page}`
  );
  const { results } = await response.json(); // con ésto ya tengo hasta acá los resultados y me evito los .then y el .catch del medio

  //obtener los personajes y dibujarlos en el html
  const html = GetCharacters(results);
  divPersonajes.innerHTML = html;
};

//unir los dos fetch (el de arriba y el de abajo) en un solo método y hacer que la petición se haga por página o por nombre, dependiendo de la búsqueda que hicimos

//para filtrar por nombre los personajes en el navbar - en lugar de traerlos por pag los trae por nombre
const FetchDataByName = async () => {
  const response = await fetch(
    `${CONSTANTS.API_URL}${CONSTANTS.CHARACTERS}?name=${name}`
  );
  const { results } = await response.json();
  const html = GetCharacters(results);
  divPersonajes.innerHTML = html;
  //la llamo abajo en la function Search
};

FetchData(); //llamando la variables desp de haberla declarado antes

//cuando el button next se ejecute (click) le voy a decir que haga algo -> puede ser con func de flecha, func tradicional (anónimas las dos), si es una funcion con nombre la tengo que hacer afuera, ej:
//                                cuando recibo los mismo paráms de la func que estoy intentando utilizar, simplem le pongo el nombre y ya está
btnNext.addEventListener("click", Click);
btnPrev.addEventListener("click", Click);

//detectar cuando se esté escribiendo search
search.addEventListener("change", Search);

//            recibe e obviamente
function Click(e) {
  //prevenir que el botón se comporte hacia su formato por defecto
  e.preventDefault();
  //hace que el efecto que se genera al hacer click en el botón no se propague por el resto de la app -> que la app no siga funcionando como debería una vez que reconoció el click por defecto
  e.stopPropagation();
  const {
    //desestructurando un obj y desetructurando le obj adentro del obj (ésto está en la consola en los datos de la API, el target y el id, ya existen en la lógica(? )
    target: { id },
  } = e;
  Decide(id);
  //la llamamos porque FetchData va a ejecutar todo su código y va a volver a dibujar
  FetchData();
}

//un solo método que se encarga del prev y del next en un switch
function Decide(id) {
  switch (id) {
    case "prev":
      page--;
      break;

    case "next":
      page++;
      break;

    default:
      //                     ya quedó el msjito escrito en una variable y lo importé con el ERRORS
      throw new Error(ERRORS.SWITCH_CHARACTERS_ERROR);
      break;
  }
}

function Search(e) {
  const {
    // destructuring p/que quede más limpio
    target: { value },
  } = e;
  //cuando se cambie
  name = value;
  //la llamo acá abajo para que funcione cuando busco en el search
  FetchDataByName();
}

/////// CONSUMO DE API  -> por ej ir pasando de pag en pag y etc, filtrar etc
////// en chatGPT -> cómo consumir una API con JS usando fetch
