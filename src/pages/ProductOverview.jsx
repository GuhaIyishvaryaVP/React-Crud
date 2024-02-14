import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductOverview() {
  const { productId } = useParams();
  const [product, setProduct] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      fetchSingleProduct();
    }
  }, [productId]);

  async function fetchSingleProduct() {
    const res = await axios.get(`https://dummyjson.com/products/${productId}`);
    const data = res.data;
    setProduct(data);
  }

  async function deleteProduct(id) {
    const res = await axios.delete(`https://dummyjson.com/products/${id}`);
    const data = res.data;
    console.log(data);
    alert("Your product deleted successfully!");
    navigate("/");
  }

  return (
    <div className="container">
      {product && (
        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`${product.thumbnail}`}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Rs.{product.price}</p>
                <div>
                  <Link
                    className="btn btn-primary"
                    to={`/products/edit-product/${product.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-secondary ms-2"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductOverview;
