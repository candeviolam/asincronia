//crear una función dinámica -> crear en tiempo de ejecución

//usar el ${} (interpolación(?) para reemplazar los lugares dónde necesito las variables

function CrearTarjetas(personaje) {
  const template = `<div class="card" style="width: 18rem;">
        <img src="${personaje.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${personaje.name}</h5>
          <p class="card-text">${personaje.name}</p>
        </div>
    </div>`;

  return template; // esencial el return -> sólo faltaba ésto en el commit de creación de tarjetas que dije que no me salía
}

function GetCharacters(results) {
  //el forEach que había hecho en el segundo .then() del index, para manejarme todo con varibles y que quede más limpio
  let htmlString = "";
  results.forEach((personaje) => {
    htmlString += CrearTarjetas(personaje);
  });
  //     traigo el htmlString que tenía en index tmb
  return htmlString;
}

export { CrearTarjetas, GetCharacters };


