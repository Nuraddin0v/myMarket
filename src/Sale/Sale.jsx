import React from "react";
import "./Sale.scss";
import { SaleDate } from "./SaleData";
const Sale = () => {
  return (
    <div>
      <div className="container sale-container">
        {SaleDate.map((item) => (
          <div
            key={item.id}
            style={{ background: `url(${item.bg_img})` }}
            className={`saleProduct ${item.className}`}
          >
            <p>{item.deal}</p>
            <h1>{item.desc ? item.desc.map : ""}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale;
