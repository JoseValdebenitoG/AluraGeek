//GET
const showProducts = () =>
  fetch("http://localhost:3000/product")
    .then((response) => response.json())
    .catch((error) => console.log(error));

const showOneProduct = (id) => {
  return fetch(`http://localhost:3000/product/${id}`).then((response) => {
    return response.json();
  });
};

//POST
const addProduct = (name, imageUrl, price) => {
  return fetch(`http://localhost:3000/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.body;
    }
    throw new Error("No fue posible crear el producto");
  });
};

// PUT/PATCH
const editProduct = async (id, name, price, description) => {
  return fetch(`http://localhost:3000/product/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      description,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deleteProduct = async (id) => {
  return await fetch(`http://localhost:3000/product/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};


export const productServices = {
  showProducts,
  showOneProduct,
  addProduct,
  editProduct,
  deleteProduct,
};
