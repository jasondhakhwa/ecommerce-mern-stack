const router = require("express").Router();
const Cart = require("../models/Cart");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");


//ADD
router.post("/create", async (req, res) => {
    const newCart = new Cart(req.body);
  
    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//UPDATE
router.put("/update/:id", async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCart);
    }catch (err) {
        res.status(500).json(err);
    }
})

//FIND
router.get("/find/:id", async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id)
        res.status(200).json(cart)

    } catch (err) {
        res.status(500).json(err)
    }
})

//FIND ALL
router.get("/find/", async (req, res) => {
    const query = req.query.new;
    try {
        //if there is query
        const products = query
            ? await Cart.find().sort({ _id: -1 }).limit(1)
            : await Cart.find()
        res.status(200).json(cart)

    } catch (err) {
        res.status(500).json("Cannot find all")
    }
})

//DELETE
router.delete("/delete/:id", async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted")

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router