import React from "react"
import {Link} from "react-router-dom"
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
            <Link to={`/edit/${props.id}`}><button>Edit</button></Link>
            </div>
        </div>
    )
}

export default Product