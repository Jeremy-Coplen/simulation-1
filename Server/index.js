require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const massive = require("massive")

const app = express()
app.use(bodyParser.json())
port = process.env.PORT || 3005

massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db)
    app.listen(port, () => console.log(`server started on port ${port}`))
}).catch(err => console.log(err))