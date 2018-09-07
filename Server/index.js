require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const massive = require("massive")
const spc = require("./shelfie_products_controller")

const app = express()
app.use(bodyParser.json())
port = process.env.PORT || 3005

app.post("/api/shelfieproduct", spc.create)
app.get("/api/shelfieproducts", spc.readAll)
app.put("/api/shelfieproduct/:id", spc.update)
app.delete("/api/shelfieproduct/:id", spc.delete)
app.get("/api/shelfieproduct/:id", )

massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db)
    app.listen(port, () => console.log(`server started on port ${port}`))
}).catch(err => console.log(err))