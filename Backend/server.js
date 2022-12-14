import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "../../Backend/routes/user_routes";

const app = express();
dotenv.config();


//middleware
app.use("/user", userRouter);

//connections
mongoose.connect("MONGO_URI=mongodb://localhost:27017/travel", {useNewUrlParser: true, useUnifiedTopology: true})


app.use("/", (req, res) => {
  res.send('home');
})

app.listen(5000, () => console.log("Listening to port 5000") )