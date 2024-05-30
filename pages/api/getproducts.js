import connectToDb from "@/middleware/mongoose";
import Product from "@/models/Product";

const handler = async (req, res) => {
    try {
        let products = await Product.find();
        res.status(200).json({ products });
    } catch (error) {
        console.log(error.message);
    }
};

// export default async function getProducts(req, res) {
//     await connectToDb(handler)
// }
  export default connectToDb(handler);