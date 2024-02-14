import React from "react";
import ProductFrom from "../components/ProductFrom";
import axios from "axios";

function AddProduct() {
  async function addNewProduct(data) {
    try {
      const res = await axios.post("https://dummyjson.com/products/add", data);
      const resonseData = res.data;
      console.log(resonseData);
    } 
    catch (error) {
      console.error(error);
    }
  }

  return <ProductFrom propsFunction={addNewProduct} />;
}

export default AddProduct;
