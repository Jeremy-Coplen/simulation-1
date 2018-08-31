import React, { Component } from "react"
import axios from "axios"

import Product from "../Product/Product"

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shelfieProducts: []
        }

        this.addShelfieProduct = this.addShelfieProduct.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.deleteShelfieProduct = this.deleteShelfieProduct.bind(this)
    }

    componentDidMount() {
        axios.get("/api/shelfieproducts")
        .then(res => {
          this.setState({
            shelfieProducts: res.data
          })
        })
      }
    
      addShelfieProduct(imageURL, productname, price) {
        axios.post("/api/shelfieProduct", {imageURL, productname, price})
        .then(res => {
          this.setState({
            shelfieProducts: res.data
          })
        })
      }

    deleteShelfieProduct(id) {
        axios.delete(`/api/shelfieproduct/${id}`)
        .then(() => {
            this.componentDidMount()
        })
    }

    render() {
            let product = this.state.shelfieProducts.map(item => {
                return (
                    <Product key={item.id} id={item.id} imageURL={item.imageurl} productName={item.productname} price={item.price} deleteShelfieProductFn={this.deleteShelfieProduct}/>
                )
            })
            

        return (
            <div>
                {product}
            </div>
        )
    }
}

export default Dashboard