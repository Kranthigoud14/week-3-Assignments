import { model, Schema } from "mongoose";
const productSchema = new Schema(
  {
    productID: {
      type: String,
      required: [true, "Product ID is required"],
      unique: [true, "Product already exists"],
    },
    productName: {
      type: String,
      required: [true, "Product name required"],
      minLength: [4, "Minimum 4 characters required"],
    },
    price: {
      type: Number,
      required: [true, "Price cannot be empty"],
      min: [10000, "Price must be at least 10000"],
      max: [50000, "Price cannot exceed 50000"],
    },
    brand: {
      type: String,
      required: [true, "Brand is required"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const productModel = model("product", productSchema);