import connectToDb from "@/middleware/mongoose";
import Product from "@/models/Product";


const handler = async (req, res)=>{
    if(req.method =="POST"){
        for(let i = 0; i < req.body.length; i++){
         const p  = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }
        res.status(200).json({message: "success"})
        }
        else{
            res.status(500).json({message: "Galt baat bhai tum post method use nhi kr rhe"})
        }
}

export default connectToDb(handler);