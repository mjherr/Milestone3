import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();


//middleware

//connections
mongoose.connect("MONGO_URI=mongodb://localhost:27017/travel", {useNewUrlParser: true, useUnifiedTo})


app.use("/", (req, res) => {
  res.send('home');
})

app.listen(3000, () => console.log("Listening to port 3000") )