import mongoose from 'mongoose';
const connectToDb =handler => async (req,res) =>{
// if allready connected
if(mongoose.connections[0].readyState){
 return handler(req,res)
 console.log("Allready connected")
}
await mongoose.connect(process.env.Mongodb_URI)
return handler(req,res)
console.log("conneceded to  connection")
}
export default connectToDb;