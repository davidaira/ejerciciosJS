const input = document.querySelector("input");
const button = document.querySelector("button");
const perroContainer = document.querySelector(".perro-container");

button.addEventListener("click", (e) => {
    e.preventDefault();
    traerRaza(input.value);
})

function traerRaza(raza) {
    fetch(`https://dog.ceo/api/breed/${raza}/images/random`)
        .then(res => res.json())
        .then(data => {
            crearRaza(data);
        });
}

function crearRaza(raza) {
    const img = document.createElement('img');
    img.src = raza.message;

    const h3 = document.createElement('h3');
    h3.textContent = raza.message;

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);

    perroContainer.appendChild(div);
}
