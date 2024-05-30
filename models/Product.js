import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug :{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    color: {
        type: String
    },
    size: {
        type: String
    }
}, { timestamps: true });
  mongoose.models = {}
const Product = mongoose.model("Product", ProductSchema); // Create the model directly
export default Product;
