import mongoose from "mongoose"

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://fk7483136:fardeen_k@todolist.lf5b1.mongodb.net/');
    console.log('db connected');
}
