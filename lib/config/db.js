import  mongoose from "mongoose";

export const ContactDB = async()=> {
    await mongoose.connect("mongodb://127.0.0.1:27017/todoApp");
    console.log(`Connected to MongoDB ${mongoose.connection.host}`);
}
