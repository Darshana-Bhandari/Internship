import API from "./api.js";

// get requests
export const getProducts = () => {
  return API.get("/products");
};

// post requests
export const createProducts = (product) => {
  return API.post("/products", product);
};

export const updateProducts = (id, product) => {
  return API.put(`/products/${id}`, product);
};

export const deleteProduct = (id) => {
  return API.delete(`/products/${id}`);
};
