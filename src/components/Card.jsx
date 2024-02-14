import React from "react";
import { Link } from "react-router-dom";

function Card({ title, content, image, id }) {
  return (
    <div className="card">
      <img src={`${image}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-truncate">{content}</p>
        <div className="d-grid">
          <Link to={`/products/${id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
