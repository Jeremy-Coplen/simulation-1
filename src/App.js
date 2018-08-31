import React, { Component } from 'react';
import axios from "axios"
import "./App.css"

import Header from "./Component/Header/Header"
import Dashboard from "./Component/Dashboard/Dashboard"
import Form from "./Component/Form/Form"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shelfieProdcuts: []
    }
    this.addShelfieProduct = this.addShelfieProduct.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
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
        shelfieProdcuts: res.data
      })
    })
  }

  render() {
    console.log("shelfie products", this.state.shelfieProducts)
    return (
      <div>
        <Header />
        <div className="main">
        <Dashboard shelfieProducts={this.state.shelfieProducts} componentDidMountFn={this.componentDidMount}/>
        <Form addShelfieProductFn={this.addShelfieProduct} componentDidMountFn={this.componentDidMount}/>
        </div>
      </div>
    );
  }
}

export default App;
