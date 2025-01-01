// import mongoose from "mongoose"

// export const connectDB = async () =>{
//     await mongoose.connect('mongodb+srv://fk7483136:fardeen_k@todolist.lf5b1.mongodb.net/todolist');
//     console.log('db connected');
// }


import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }
    await mongoose.connect(uri);
   console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with failure
  }
};
