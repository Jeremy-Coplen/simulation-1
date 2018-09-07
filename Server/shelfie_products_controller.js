module.exports = {
    create: (req, res, next) => {
        const db = req.app.get("db")
        const shelfieProduct = req.body

        db.createShelfieProduct(shelfieProduct)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Yikes something went wrong"})
            console.log(err)
        })
    },

    readAll: (req, res, next) => {
        const db = req.app.get("db")

        db.getAllShelfieProducts()
        .then(shelfieProducts => res.status(200).send(shelfieProducts))
        .catch(err => {
            res.status(500).send({errorMessage: "Yikes something went wrong"})
            console.log(err)
        })
    },

    update: (req, res, next) => {
        const db = req.app.get("db")
        const {params, query} = req

        db.updateShelfieProduct({id: params.id, imageURL: query.img, productname: query.name, price: query.price})
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Yikes something went wrong"})
            console.log(err)
        })
    },

    delete: (req, res, next) => {
        const db = req.app.get("db")

        db.deleteShelfieProduct({id: req.params.id})
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Yikes something went wrong"})
            console.log(err)
        })
    },

    readOne: (req, res, next) => {
        const db = req.app.get("db")
        
        db.getOneShelfieProduct({id: req.params.id})
        .then(shelfieProduct => res.status(200).send(shelfieProduct))
        .catch(err => {
            res.status(500).send({errorMessage: "Yikes something went wrong"})
            console.log(err)
        })

    }
}