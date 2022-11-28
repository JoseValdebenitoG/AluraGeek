import { productServices } from "../services/product-services.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("[data-name]").value;
  const url = document.querySelector("[data-url]").value;
  const price = document.querySelector("[data-price]").value;

  productServices.addProduct(name, url, price).then((response) => {
      window.location.href = "/index.html";
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
