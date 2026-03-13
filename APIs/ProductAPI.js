import exp from "express";
import { productModel } from "../models/productModules.js";
export const productApp = exp.Router();
// Create Product
productApp.post("/products", async (req, res) => {
  const newProduct = new productModel(req.body);
  const savedProduct = await newProduct.save();
  res.status(201).json({
    message: "Product created",
    payload: savedProduct
  });
});
// Read all products
productApp.get("/products", async (req, res) => {
  const products = await productModel.find();
  res.status(200).json({
    message: "Products",
    payload: products
  });
});
// Read product by productID
productApp.get("/products/:productID", async (req, res) => {
  const product = await productModel.findOne({ productID: req.params.productID});
  res.status(200).json({
    message: "Product",
    payload: product
  });
});
// Update product
productApp.put("/products/:productID", async (req, res) => {
  const updatedProduct = await productModel.findOneAndUpdate({ productID: req.params.productID },req.body,{ new: true }
  );
  res.status(200).json({
    message: "Product updated",
    payload: updatedProduct
  });
});
// Delete product
productApp.delete("/products/:productID", async (req, res) => {
  const deletedProduct = await productModel.findOneAndDelete({  productID: req.params.productID  });
  res.status(200).json({ message: "Product deleted",payload: deletedProduct
  });
});
