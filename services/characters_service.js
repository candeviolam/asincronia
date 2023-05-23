//crear una función dinámica -> crear en tiempo de ejecución

//usar el ${} (interpolación(?) para reemplazar los lugares dónde necesito las variables

function CrearTarjetas(personaje, div) {
  const template = `<div class="card" style="width: 18rem;">
        <img src="${personaje.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${personaje.name}</h5>
          <p class="card-text">${personaje.name}</p>
        </div>
    </div>`;
}

export { CrearTarjetas };
