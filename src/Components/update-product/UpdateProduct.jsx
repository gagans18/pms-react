import React from 'react'
import { useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import { updateProduct } from '../services/ProductServices'

function UpdateProduct() {

    const [pName, setPname] = useState("")
    const [pPrice, setPprice] = useState('')
    const [pDescription, setPdescription] = useState("")
    const [pCode, setPcode] = useState("")
    const [pRdate, setPrdate] = useState("")
    const [pUrl, setPurl] = useState("")
    const [pRate, setPrate] = useState('')

    const { productid } = useParams()

    let navigate = useNavigate();

    const handleUpdateFunction = (e) => {
        e.preventDefault();
        const updateProductObj = {
            "product_name": pName,
            "price": pPrice,
            "description": pDescription,
            "product_code": pCode,
            "release_date": pRdate,
            "image_url": pUrl,
            "star_rating": pRate,
            "product_id": productid
        }

        console.log(updateProductObj);

        if (window.confirm("Do u want to Update?")) {
            updateProduct(productid, updateProductObj)
                .then(
                    window.alert("Updated Successfully")
                ).catch((err) => {
                    window.alert(err.message)
                }
                )

            navigate("/products")
        }


    }
    const design = (
        <>
            <h2 style={{
                position: "relative",
                top: "35px"

            }}>UPDATE PRODUCT</h2>
            <div className="container-fluid border rounded bg-success" style={{ width: "auto", margin: "50px", padding: "10px" }}>
                <form onSubmit={handleUpdateFunction}>
                    <div className="container-fluid w-50">
                        <label className="form-label float-start  text-dark fw-bolder" style={{ textShadow: "2px 2px 4px white" }} typeof="text">Product ID:</label><br />
                        <input className="form-control" type="text" value={productid} disabled />
                    </div>
                    <div className="container-fluid w-50">
                        <label className="form-label float-start text-white fw-bolder" style={{ textShadow: "2px 2px 4px black" }} typeof="text">Product Name:</label><br />
                        <input className="form-control" placeholder="Enter the Name" type="text" onChange={(e) => setPname(e.target.value)} />
                    </div>
                    <div className="container-fluid w-50">
                        <label className="form-label float-start text-white fw-bolder" style={{ textShadow: "2px 2px 4px black" }} typeof="number">Product Price:</label><br />
                        <input className="form-control" placeholder="Enter the Price" type="text" onChange={(e) => setPprice(e.target.value)} />
                    </div>
                    <div className="container-fluid w-50">
                        <label className="form-label float-start text-white fw-bolder" style={{ textShadow: "2px 2px 4px black" }} typeof="text">Product Description:</label><br />
                        <input className="form-control" placeholder="Enter the Description" type="text" onChange={(e) => setPdescription(e.target.value)} />
                    </div>
                    <div className="container-fluid w-50">
                        <label className="form-label float-start text-white fw-bolder" style={{ textShadow: "2px 2px 4px black" }} typeof="text">Product Code:</label><br />
                        <input className="form-control" placeholder="Enter the Code" type="text" onChange={(e) => setPcode(e.target.value)} />
                    </div>
                    <div className="container-fluid w-50">
                        <label className="form-label float-start text-white fw-bolder" style={{ textShadow: "2px 2px 4px black" }} typeof="text">Release Date:</label><br />
                        <input className="form-control" placeholder="Enter the Date" type="Date" onChange={(e) => setPrdate(e.target.value)} />
                    </div>
                    <div className="container-fluid w-50">
                        <label className="form-label float-start text-white fw-bolder " style={{ textShadow: "2px 2px 4px black" }} typeof="text">Image URL:</label><br />
                        <input className="form-control" placeholder="Enter the URL" type="text" onChange={(e) => setPurl(e.target.value)} />
                    </div>
                    <div className="container-fluid w-50">
                        <label className="form-label float-start text-white fw-bolder" style={{ textShadow: "2px 2px 4px black" }} typeof="text">Star Rating:</label><br />
                        <input className="form-control" placeholder="Enter the Rating" type="text" onChange={(e) => setPrate(e.target.value)} />
                    </div>
                    <button className=" btn btn-dark text-white mx-3 my-2" type="submit">Submit</button>
                    <Link to="/" ><button className=" btn btn-danger text-white " type="button" >Cancel</button></Link>
                </form>
            </div>
        </>

    )

    return design

}

export default UpdateProduct
