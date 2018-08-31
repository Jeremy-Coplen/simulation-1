import React, { Component } from "react"
import axios from "axios"

import Product from "../Product/Product"

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {}

        this.deleteShelfieProduct = this.deleteShelfieProduct.bind(this)
    }

    deleteShelfieProduct(id) {
        axios.delete(`/api/shelfieproduct/${id}`)
        .then(() => {
            this.props.componentDidMountFn()
        })
    }

    render() {
        let product = []
        if(this.props.shelfieProducts) {
            product = this.props.shelfieProducts.map(item => {
                return (
                    <Product key={item.id} id={item.id} imageURL={item.imageurl} productName={item.productname} price={item.price} deleteShelfieProductFn={this.deleteShelfieProduct}/>
                )
            })
        }
        return (
            <div>
                {product}
            </div>
        )
    }
}

export default Dashboard