import React, { useState } from "react";

function ProductFrom({ propsFunction }) {
  const initialState = {
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  };

  const [productData, setProductData] = useState(initialState);

  function handleChange(event) {
    setProductData({
      ...productData,
      [event.target.name]: event.target.value,
    });
  }

  function handleImages(event) {
    productData.images.push(event.target.value);
    setProductData(productData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    propsFunction(productData);
  }
  
  return (
    <div className="container">
      <div className="card col-8 col-sm-6 mx-auto">
        <div className="card-body">
          <h3 className="text-center pb-2">Product</h3>
          <form className="row g-2" onSubmit={handleSubmit}>
            <div className="col-12 col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id="title"
                  onChange={handleChange}
                  value={productData.title}
                  placeholder="Title"
                />
                <label htmlFor="title">Title</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  id="price"
                  onChange={handleChange}
                  value={productData.price}
                  placeholder="Price"
                />
                <label htmlFor="price">Price</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  name="discountPercentage"
                  id="discountPercentage"
                  onChange={handleChange}
                  value={productData.discountPercentage}
                  placeholder="Discount Percentage"
                />
                <label htmlFor="discountPercentage">Discount Percentage</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  name="stock"
                  id="stock"
                  onChange={handleChange}
                  value={productData.stock}
                  placeholder="Available Stocks"
                />
                <label htmlFor="stock">Available Stocks</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  name="rating"
                  id="rating"
                  onChange={handleChange}
                  value={productData.rating}
                  placeholder="Rating"
                />
                <label htmlFor="rating">Rating</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  name="brand"
                  id="brand"
                  onChange={handleChange}
                  value={productData.brand}
                  placeholder="Brand"
                />
                <label htmlFor="brand">Brand</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  id="category"
                  onChange={handleChange}
                  value={productData.category}
                  placeholder="Category"
                />
                <label htmlFor="category">Category</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  name="thumbnail"
                  id="thumbnail"
                  onChange={handleChange}
                  value={productData.thumbnail}
                  placeholder="Thumbnail"
                />
                <label htmlFor="thumbnail">Thumbnail</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  name="images"
                  id="images"
                  onChange={handleImages}
                  placeholder="Images"
                />
                <label htmlFor="images">Images</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Description"
                  id="description"
                  name="description"
                  onChange={handleChange}
                  value={productData.description}
                ></textarea>
                <label htmlFor="description">Description</label>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex justify-content-center gap-3">
                <button type="reset" className="btn btn-secondary px-5">
                  Reset
                </button>
                <button type="submit" className="btn btn-primary px-5">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductFrom;
