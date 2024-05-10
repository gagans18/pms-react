import { Button } from "bootstrap"
import { removeProduct } from "../services/ProductServices"

const DeleteProduct = (props) => {

    const deleteFunction = () => {
        if (window.confirm("Do you really want to delete this product")) {
            removeProduct(props.productId)
                .then(
                    window.alert("Deleted Succesfully")
                )
                .catch(

            )
        }
    }

    const design = (
        <button className="btn btn-outline-danger" type="button" onClick={deleteFunction}>Delete</button>
    )
    return design
}

export default DeleteProduct
