const mongoose = require('mongoose');

const  UserSchema  = new mongoose.Schema({

   userId: {
       required: true,
       type: 'string',
    },
    email:{
        required: true,
        type:'string',
    },
    password:{ 
        required: true,
        type:'string',
    }
})
const User = mongoose.model('User', UserSchema);
export default User;