import Axios from "axios";

const baseUrl = "http://localhost:8001/product";

export function getProducts(sortChoice) {
  return Axios.get(`${baseUrl}/sort/${sortChoice}`);
}

export function removeProduct(eid) {
  return Axios.delete(`${baseUrl}/delete/${eid}`);
}

export function addProduct(obj) {
  return Axios.post(`${baseUrl}/add`, obj);
}

export function viewProduct(id) {
  return Axios.get(`${baseUrl}/view/${id}`);
}

export function updateProduct(id, updateobj) {
  return Axios.put(`${baseUrl}/update/${id}`, updateobj);
}
