import React from "react"
import "./Product.css"

function Product(props) {
    return (
        <div className="product_container">
            <div>
                {
                    props.imageURL
                        ?
                        <img className="product_img" src={props.imageURL} alt="" />
                        :
                        <img className="product_img" src={require("../Form/img/default_img.jpg")} alt="" />
                }
            </div>
            <div>
            <h2>{props.productName}</h2>
            <h3>${props.price}</h3>
            <button
            onClick={() => props.deleteShelfieProductFn(props.id)}>Delete</button>
            <button>Edit</button>
            </div>
        </div>
    )
}

export default Product