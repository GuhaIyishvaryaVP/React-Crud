import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function HomePage() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState("");

  // useEffect(function,dependancyList)
  useEffect(() => {
    getAllProducts();
    // console.log("------> Onload");
  }, []);

  // useEffect(() => {
  //   console.log("This is useEffect");
  // }, [count]);

  async function getAllProducts() {
    const res = await axios.get("https://dummyjson.com/products"); // get method
    const data = res.data;
    setProducts(data);
  }

  function setCountHandler() {
    setCount(count + 1);
  }

  return (
    <div>
      {/* <p>{count}</p>
      <button className="btn btn-danger" onClick={setCountHandler}>
        Inc Count
      </button> */}
      <div className="row row-cols-2 row-cols-md-4 g-2">
        {products &&
          products.products.map((product, i) => {
            return (
              <div className="col" key={i}>
                <div className="card">
                  <img
                    src={`${product.thumbnail}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-truncate">{product.content}</p>
                    <div className="d-grid">
                      <Link
                        to={`/products/${product.id}`}
                        className="btn btn-primary"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HomePage;
