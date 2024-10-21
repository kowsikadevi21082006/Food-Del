import mongoose from "mongoose";

export const connectDB = async(req, res)=>{
    await mongoose.connect('mongodb+srv://kowsikadeventhiran21:kowsika2006@cluster0.msjgm.mongodb.net/ffoood').then(()=>console.log("DB connected"));
}