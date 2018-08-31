import React from "react"
import {Link} from "react-router-dom"

function Header(props) {
    return (
        <div>
            <h1>Shelfie</h1>
            <Link to="/" ><button>Dashboard</button></Link>
            <Link to="/add"><button>Add Inventory</button></Link>
        </div>
    )
}

export default Header