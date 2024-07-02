import mongoose from "mongoose";

const dbConnection = async() => {
    const DB_URI = "mongodb+srv://user:Abhishek@cluster3.gp3i1.mongodb.net/";
    try{
         await mongoose.connect(DB_URI, { useUnifiedTopology: true });
         console.log("Database Connected Successfully");
    }
    catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}

export default dbConnection;