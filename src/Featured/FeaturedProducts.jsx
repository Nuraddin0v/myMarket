import React from "react";
import "./FeaturedProducts.scss";
import { FeaturedProductsData } from "./FeaturedProductsData.jsx";
const FeaturedProducts = () => {
  return (
    <div>
      <div className="container">
        <div className="products">
          {FeaturedProductsData?.map((item, index) => {
            return (
              <div key={index} className="product">
                <img src={item.url} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
