const router = require("express").Router();
const Product = require("../models/Product");
const path = require('path');

const fs = require("fs")

const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({
    storage: storage
})

//ADD
router.post("/create", upload.single('image'), async (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        size: req.body.size,
        color: req.body.color,
        // image: req.file.image
    })
    newProduct
        .save()
        .then(() => res.status(201).json(newProduct))
        .catch(err => console.log(err)
        )


    // description: {type: String, unique:true},    
});


router.put("/update/:id", upload.single('image'), async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    name: req.body.name,
                    category: req.body.category,
                    price: req.body.price,
                    size: req.body.size,
                    color: req.body.color,
                    quantity: req.body.quantity,
                    // image: req.file.image},
                }
            },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
})

//FIND
router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)

    } catch (err) {
        res.status(500).json(err)
    }
})

//FIND ALL
router.get("/", async (req, res) => {
    const qcategory = req.query.category;
    const qnew = req.query.new;
    try {
        let products;
        //if there is query
        if (qnew) {
            console.log("Returning new");
            products = await Product.find().sort({ _id: -1 }).limit(1)
        }
        //if there is caterogy query
        else if (qcategory) {
            console.log("Returning Category");
            products = await Product.find({
                category: {
                    $in: [qcategory]
                }
            })
        }
        else {
            console.log("Returning all");
            products = await Product.find()

        }
        res.status(200).json(products)

    } catch (err) {
        res.status(500).json("Cannot find all")
    }
})

//DELETE
router.delete("/delete/:id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted")

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router