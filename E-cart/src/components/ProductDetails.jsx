import React from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";

function ProductDetails() {
  const { id } = useParams();
  return (
    <>
      <div className="container">
        <div className="img"></div>
      </div>
    </>
  );
}

export default ProductDetails;
