const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: false,
            required: false
        },
        category: {
            type: Array,
            required: true,
        },
        image: {
            data: Buffer
            
        },
        size: {
            type: Array,
            required:true
        },
        color: {
            type: Array,
        },
        price: {
            type: Number,
        },
        quantity: {
            type: Number,
        },
        inStock: {
            type: Boolean,
            default: true,
        },

    }
)

module.exports = mongoose.model("Product", ProductSchema)