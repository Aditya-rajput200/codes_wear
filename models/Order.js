const mongoose =  require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    products:[{
       prodductId: { type: String},
       quantity: {type: Number},
     
    }],
    address:{type: String, required: true},
    ammount:{type: Number, required: true},
    status: {type: String, default: 'pending'},
    date: {type: Date, default: Date.now}
} ,{timestamps: true})

const Order = mongoose.model('Order', OrderSchema);
export default Order;