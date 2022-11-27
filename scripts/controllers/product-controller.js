import { productServices } from "../services/product-services.js";
import { formatPrice } from "../formatterPrices.js";

const newProduct = (name, price, imageUrl, id) => {
  const card = document.createElement("div");
  const content = `
        <div class="product">
            <img src="${imageUrl}" alt="img">
            <h1 class="product-name"> ${name} </h1>
            <p class="price">${formatPrice(price)}</p>
            <a class="see-product" href="../../screens/product.html?id=${id}">Ver Producto</a>
        </div>   
    `;
  card.innerHTML = content;
  card.dataset.id = id;

  return card;
};

const products = document.querySelector("[data-product]");

const render = async () => {
  try {
    const showProducts = await productServices.showProducts();
    showProducts.forEach((element) => {
      products.appendChild(
        newProduct(
          element.name,
          element.price,
          element.imageUrl,
          element.id
        )
      );
    });
  } catch (erro) {
    console.log(erro);
  }
};

render();
