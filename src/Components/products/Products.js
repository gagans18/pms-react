import React, { useEffect, useState } from "react";
import { getProducts } from "../services/ProductServices";
import DeleteProduct from "../delete-products/DeleteProduct";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProduct] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [requestComplete, setRequestComplete] = useState(false);
  const [selectIndex, setSelectIndex] = useState(1);
  const [deleteStatus, setDeleteStatus] = useState(0);

  const handleDeletion = (data) => {
    setDeleteStatus(data)
  };

  const getData = () => {
    getProducts(selectIndex)
      .then((httpResponse) => {
        const records = httpResponse.data;
        setProduct(records);
        setErrorMessage("");
        setRequestComplete(true);

      })
      .catch((err) => {
        setProduct(undefined);
        setErrorMessage(err.message);
        setRequestComplete(true);
      });
  };

  const selectHandler = (event) => {
    setSelectIndex(event.target.selectedIndex + 1);
  };

  useEffect(() => {
    getData();
  }, [selectIndex,deleteStatus]);

  let design;
  if (!requestComplete) {
    design = <span>Loading...please wait</span>;
  } else if (errorMessage !== "") {
    design = <span>{errorMessage}</span>;
  } else if (!products || products.length === 0) {
    design = <span>No records</span>;
  } else
    design = (
      <>
        <div className="float-start m-2 p-10 bg-dark rounded text-light">
          <h5 className="mx-2">LIST OF PRODUCTS</h5>
          <label className="mx-2 my-1 text-uppercase " typeof="text">
            Filter By:{" "}
          </label>
          <select
            className="form-select my-1 mx-2 rounded bg-secondary text-white"
            style={{ width: "180px", height: "35px" }}
            onChange={selectHandler}
          >
            <option selected disabled>
              {" "}
              --FILTER BY--
            </option>
            <option>BY NAME</option>
            <option> BY PRICE</option>
            <option>By RATE</option>
          </select>
        </div>
        <br />
        <div
          className=" container-fluid"
          style={{ width: "auto", height: "auto" }}
        >
          <table className="table table-border">
            <thead>
              <tr className="table-white">
                <th className="text-uppercase">Image</th>
                <th className="text-uppercase">Product Name</th>
                <th className="text-uppercase">Price</th>
                <th className="text-uppercase">Star Rating</th>
                <th className="text-uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="table-dark">
              {products.map((e) => {
                return (
                  <tr key={e.product_id}>
                    <td>
                      <Link to={`/single-product/${e.product_id}`}>
                        <img
                          src={e.image_url}
                          style={{
                            height: "100px",
                            width: "150px",
                            BorderRadius: "10px",
                          }}
                        />
                      </Link>
                    </td>
                    <td>{e.product_name}</td>
                    <td>{e.price}</td>
                    <td>{e.star_rating}</td>
                    <td>
                      <DeleteProduct
                        productId={e.product_id}
                        dataFromDelete={handleDeletion}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  return design;
};

export default Products;
