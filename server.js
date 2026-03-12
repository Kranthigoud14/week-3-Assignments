import exp from "express";
import { connect } from "mongoose";
import { productApp } from "./APIs/ProductAPI.js";

const app = exp();

app.use(exp.json());

// routes
app.use("/product-api", productApp);

// function to connect DB
async function connectDB(){
  try{
    await connect("mongodb://localhost:27017/productDB");
    console.log("DB connected successfully");

    // start server only after DB connection
    app.listen(4000, () => {
      console.log("Server running on port 4000");
    });

  }catch(err){
    console.log("DB connection error", err);
  }
}
connectDB();