import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Products from "../products/Products";
import AddProduct from "../add-products/AddProduct";
import SingleProduct from "../single-product/SingleProduct";
import UpdateProduct from "../update-product/UpdateProduct";
import "./Navbar.css";
import HomePage from "../home/HomePage";

function NavigateBar() {
  const design = (
    <BrowserRouter>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand text-light text-uppercase fw-bold  "
            href="#"
          >
            Product Management System
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                id="link1"
                className="nav-link active text-light text-uppercase fw-bold"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <Link
                id="link2"
                className="nav-link text-light text-uppercase fw-bold"
                to="/products"
              >
                Products
              </Link>
              <Link
                id="link3"
                className="nav-link text-light text-uppercase fw-bold"
                to="/add-products"
              >
                Add Products
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/add-products" element={<AddProduct />}></Route>
        <Route
          path="/single-product/:productid"
          element={<SingleProduct />}
        ></Route>
        <Route path="/update/:productid" element={<UpdateProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
  return design;
}
export default NavigateBar;
