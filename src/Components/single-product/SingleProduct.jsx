import { useEffect, useState } from "react";
import { viewProduct } from "../services/ProductServices";
import { Link, useParams } from "react-router-dom";
import "./SingleProduct.css"

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [requestComplete, setRequestComplete] = useState(false);

  const { productid } = useParams();

  const singleProductFunction = () => {
    viewProduct(productid)
      .then((httpResponse) => {
        const record = httpResponse.data;
        setProduct(record);
        setErrorMessage("");
        setRequestComplete(true);
      })
      .catch((err) => {
        setProduct(undefined);
        setErrorMessage(err.message);
        setRequestComplete(true);
      });
  };
  
  useEffect(() => {
    singleProductFunction();
  }, []);

  let design;
  if (!requestComplete) {
    design = <span>Loading...please wait</span>;
  } else if (errorMessage !== "") {
    design = <span>{errorMessage}</span>;
  } else if (!product && product.length == 0) {
    design = <span>No records</span>;
  } else
    design = (
      <>
        <div
          className="container-fluid bg-success main-div border product-div rounded"
          
        >
          <div
            className=" tbl-div mt-1"
            // style={{ width: "400px", height: "auto", margin: "180px" }}
          >
            <table
              className="table"
            >
              <tr className="text-end my-2">
                <th className="text-end w-25 p-2">DETAIL:</th>
                <td className="text-start w-50 p-2 text-white ">
                  {product.product_name}
                </td>
              </tr>
              <tr className="my-1">
                <th className="text-end w-25 p-2">NAME:</th>
                <td className="text-start w-50 p-2 text-white">
                  {product.product_name}
                </td>
              </tr>
              <tr className="my-2">
                <th className="text-end w-25 p-2">CODE:</th>
                <td className="text-start w-50 p-2 text-white">
                  {product.product_code}
                </td>
              </tr>
              <tr className="my-2">
                <th className="text-end w-25 p-2">DESCRIPTION:</th>
                <td className="text-start w-50 p-2 text-white">
                  {product.description}
                </td>
              </tr>
              <tr className="my-2">
                <th className="text-end w-25 p-2">AVAILABILITY:</th>
                <td className="text-start w-50 p-2 text-white">
                  {product.release_date}
                </td>
              </tr>
              <tr className="my-2">
                <th className="text-end w-25 p-2">PRICE:</th>
                <td className="text-start w-50 p-2 text-white">
                  {product.price}
                </td>
              </tr>
              <tr className="my-2">
                <th className="text-end w-25 p-2">RATING:</th>
                <td className="text-start w-50 p-2 text-white">
                  {product.star_rating}
                </td>
              </tr>
              <tr className="my-2">
                <td className="p-2">
                  <Link to="/" className="p-0">
                    <button className="btn btn-dark " type="button">
                      Back
                    </button>
                  </Link>
                </td>
                <td className=" p-2">
                  <Link to={`/update/${productid}`} className="p-0">
                    <button className="btn btn-warning" type="button">
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            </table>
          </div>
          <div
          
            // style={{
            //   position: "relative",
            //   right: "50px",
            // }}
          >
            <h4>IMAGE:</h4>
            <img className="border rounded" src={product.image_url} />
          </div>
        </div>
      </>
    );
  return design;
};

export default SingleProduct;
