import connectToDb from "@/middleware/mongoose";
import Product from "@/models/Product";


const handler = async (req, res) => {
    // if post req
    if (req.method === 'POST') {
        console.log("ADitya yhe h "+req.body)
        for (let i = 0; i < req.body.length; i++) {

            let p = new Product({
                name: req.body[i].name,
                slug: req.body[i].slug,
                price: req.body[i].price,
                description: req.body[i].description,
                image: req.body[i].image,
                category: req.body[i].category,
                color: req.body[i].color,
                size : req.body[i].size,
   })
          await  p.save();
           

        }
        res.status(200).json({ message: 'Product added' });
    }
    else {
        res.status(404).json({ message: 'Bad request' });
    }
}

export default connectToDb(handler);


