import mongoose, { mongo } from 'mongoose';
import { DB_NAME } from '../constants.js';

// const connectDB = async ()=>{
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`DB connect successfully host : ${connectionInstance.connection.host}` )
//     } catch (error) {
//         console.log("error :", error)
//     }
// }

// export default connectDB
// const mongoose=require('mongoose');
// require('dotenv').config();

const connectDB=async ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            family:4
        }).then(console.log('db connection-successful'));
    }catch(error){
        console.log(error);
    }
}
export default connectDB;