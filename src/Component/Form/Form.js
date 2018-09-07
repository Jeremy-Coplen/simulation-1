// edit functionality untested

import React, {Component} from "react"
import axios from "axios"
import {Redirect} from "react-router-dom"
import "./Form.css"

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imageURL: "",
            productname: "",
            price: "",
            redirect: false,
            editing: false
        }
        this.updateInput = this.updateInput.bind(this)
        this.renderRedirect = this.renderRedirect.bind(this)
    }

    componentDidMount() {
        if(this.props.match.params.id) {
            axios.get(`/api/shelfieproduct/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    imageURL: res.data.imageURL,
                    productName: res.data.productName,
                    price: res.data.price,
                    editing: true
                })
            })
        }
    }

    updateInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    cancelInput() {
        this.setState({
            imageURL: "",
            productName: "",
            price: ""
        })
    }

    addShelfieProduct(imageURL, productname, price) {
        axios.post("/api/shelfieProduct", {imageURL, productname, price})
        .then(() => {
            this.setState({
                redirect: true
            })
        })
    }

    editShelfieProduct(imageURL, productname, price) {
        axios.put(`/api/shelfieProduct/${this.props.match.params.id}`, {imageURL, productname, price})
        .then(() => {
            this.setState({
                redirect: true
            })
        })
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
    }

    render() {
        return (
            <div className="form_container">
                {this.renderRedirect()}
                <div>
                    {
                        this.state.imageURL === ""
                        ?
                            <img className="product_img" src={require("./img/default_img.jpg")} alt=""/>
                        :
                            <img className="product_img" src={this.state.imageURL} alt="Invalid URL"/>
                    }
                </div>
                <div>
                    <h2>Image URL:</h2>
                    <input type="text"
                    placeholder="Enter image URL"
                    name="imageURL"
                    value={this.state.imageURL}
                    onChange={this.updateInput}/>
                </div>
                <div>
                    <h2>Product Name:</h2>
                    <input type="text"
                    placeholder="Enter product name"
                    name="productName"
                    value={this.state.productName}
                    onChange={this.updateInput}/>
                </div>
                <div>
                    <h2>Price:</h2>
                    <input type="text"
                    placeholder="Enter price"
                    name="price"
                    value={this.state.price}
                    onChange={this.updateInput}/>
                </div>
                <div>
                    <button
                    onClick={() => this.cancelInput()}>Cancel</button>
                    {
                        this.state.editing
                        ?
                            <button
                            onClick={() => this.editShelfieProduct(this.state.imageURL, this.state.productname, this.state.price)}>Save Changes</button>
                        :
                        <button
                        onClick={() => this.addShelfieProduct(this.state.imageURL, this.state.productname, this.state.price)}>Add to inventory</button>
                    }
                </div>
            </div>
        )
    }
}

export default Form