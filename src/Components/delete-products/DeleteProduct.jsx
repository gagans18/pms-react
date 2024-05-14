import { Button } from "bootstrap";
import { removeProduct } from "../services/ProductServices";
import { useEffect } from "react";

const DeleteProduct = (props) => {
  const deleteFunction = () => {
    if (window.confirm("Do you really want to delete this product")) {
      removeProduct(props.productId)
        .then(() => {
          window.alert("Deleted Succesfully")
          props.dataFromDelete(props.productId)
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const design = (
    <button
      className="btn btn-outline-danger"
      type="button"
      onClick={deleteFunction}
    >
      Delete
    </button>
  );
  return design;
};

export default DeleteProduct;
