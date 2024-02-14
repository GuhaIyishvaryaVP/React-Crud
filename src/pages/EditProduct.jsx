import React from "react";
import ProductFrom from "../components/ProductFrom";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditProduct() {   

  const { productId } = useParams();

  async function handleSubmit(data) {
    try {
      const res = await axios.put(
        `https://dummyjson.com/products/${productId}`,
        data
      );
      const responseData = res.data;
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  }
  return <ProductFrom propsFunction={handleSubmit} />;
}

export default EditProduct;
