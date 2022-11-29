import { productServices } from "../services/product-services.js";

const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const inputImageUrl = document.querySelector("[data-url]");
const inputName = document.querySelector("[data-nombre]");
const inputPrice = document.querySelector("[data-precio]");
const inputDescription = document.querySelector("[data-descripcion]");

productServices.showOneProduct(id).then((data) => {
  inputImageUrl.setAttribute("src", data.imageUrl);
  inputName.value = data.name;
  inputPrice.value = data.price;
  inputDescription.value = data.description;
});

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  productServices.editProduct(
      id,
      inputName.value,
      inputPrice.value,
      inputDescription.value
    )
    .then(() => {
      window.location.href = "../../screens/product.html";
    });
});
