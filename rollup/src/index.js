const $body = document.querySelector("body"); // encuentra el elemento 
const API = "https://api.escuelajs.co/api/v1/products/?offset=5&limit=10"; // url de la api 
import logo from "./assets/react.png"; // importacion del logo
import "./styles/styles.css"; // importacion de los estilos

const main = async () => {
  const response = await fetch(API);
  const products = await response.json();
  const output = products
    .map((product) => {
      return `
      <article class="Card">
        <img src="${product.images[0]}" />
        <h2>
          ${product.title} <small>Precio $${product.price}</small>
        </h2>
      </article>
    `;
    })
    .join("");

  const newItem = document.createElement("section");
  newItem.classList.add("Items");
  newItem.innerHTML = output;

  const newHeader = document.createElement("header");
  const newImage = document.createElement("img");
  newImage.src = logo;

  newHeader.appendChild(newImage);
  $body.appendChild(newHeader);
  $body.appendChild(newItem);
};

main();
