import { productServices } from "../services/product-services.js";
import { formatPrice } from "../formatterPrices.js";

const getProducts = (name, price, imageUrl, id) => {
  const card = document.createElement("div");

  const content = `
    <div class="product">
        <div class="container">
            <button class="buttonDelete" type="button">
              <img class="deleteImage" src="../assets/delete.png" alt="Delete" />
            </button>
            
            <a href="../screens/edit-product.html?id=${id}">
            
              <button class="buttonEdit" type="button">
                <img class="editImage" src="../assets/edit.png" alt="Editar" />
              </button>
            
            </a>
        </div>
        
        <img src="${imageUrl}" alt="img">
        <h1 class="product-name"> ${name} </h1>
        <p class="price">${formatPrice(price)}</p>
    </div>
    `;
  card.innerHTML = content;
  card.dataset.id = id;
  return card;
};

const products = document.querySelector("[data-allProducts]");

products.addEventListener("click", async (event) => {
  let deleteButton = event.target.className === "deleteImage";
  if (deleteButton) {
    const product = event.target.closest("[data-id]");
    let id = product.dataset.id;
    productServices
      .deleteProduct(id)
      .then((res) => {
        product.remove();
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
});

const render = async () => {
  try {
    const showProducts = await productServices.showProducts();

    showProducts.forEach((product) => {
      products.appendChild(
        getProducts(
          product.name,
          product.price,
          product.imageUrl,
          product.id
        )
      );
    });
  } catch (err) {
    console.log(err);
  }
};

render();
