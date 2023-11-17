import React from "react";
import "./Product.scss";
import { ProductsData } from "./ProductsData";
import { StarCount } from "../Function/StarCount";
import { SalePrice } from "../Function/StarCount";
const Product = () => {
  return (
    <div>
      <div className="container product-container">
        <div className="title">
          <h1>Popular Products</h1>
          <button id="btn">
            View All{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
            >
              <path
                d="M16 7.00049H1"
                stroke="#00B307"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.94995 0.975464L16 6.99946L9.94995 13.0245"
                stroke="#00B307"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="products">
          {ProductsData?.map((item) => (
            <div key={item.id} className="product">
              {/* <p>{item.salePercent ? `Sale ${item.salePercent}` : ""}</p> */}
              <img src={item.url} alt="" />
              <div className="data">
                <div className="dataset">
                  <div
                    style={{ backgroundColor: item.heart ? "#00b207" : "" }}
                    className="heart circle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.9996 17.5451C-6.66672 8.3333 4.99993 -1.6667 9.9996 4.65668C14.9999 -1.6667 26.6666 8.3333 9.9996 17.5451Z"
                        stroke={item.heart ? "white" : "#1A1A1A"}
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                  <div className="eye circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 3.54102C3.75 3.54102 1.25 10.0001 1.25 10.0001C1.25 10.0001 3.75 16.4577 10 16.4577C16.25 16.4577 18.75 10.0001 18.75 10.0001C18.75 10.0001 16.25 3.54102 10 3.54102V3.54102Z"
                        stroke="#1A1A1A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 13.125C10.8288 13.125 11.6237 12.7958 12.2097 12.2097C12.7958 11.6237 13.125 10.8288 13.125 10C13.125 9.1712 12.7958 8.37634 12.2097 7.79029C11.6237 7.20424 10.8288 6.875 10 6.875C9.1712 6.875 8.37634 7.20424 7.79029 7.79029C7.20424 8.37634 6.875 9.1712 6.875 10C6.875 10.8288 7.20424 11.6237 7.79029 12.2097C8.37634 12.7958 9.1712 13.125 10 13.125V13.125Z"
                        stroke="#1A1A1A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <b style={{ display: item.salePercent ? "block" : "none" }}>
                    {item.salePercent
                      ? "Sale" + " " + item.salePercent + "%"
                      : ""}
                  </b>
                  <p>{item.productName}</p>
                  <h2>
                    {item.salePercent
                      ? SalePrice(item.price, item.salePercent)
                      : "$" + item.price}
                    <span>{item.salePercent ? "$" + item.price : ""}</span>
                  </h2>
                  <p>{StarCount(item.starCout)}</p>
                </div>
                <div
                  style={{ backgroundColor: item.bag ? "#00B207" : "" }}
                  className="bag"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M6.66667 8.83333H4.16667L2.5 18H17.5L15.8333 8.83333H13.3333M6.66667 8.83333V6.33333C6.66667 4.49239 8.15905 3 10 3V3C11.8409 3 13.3333 4.49238 13.3333 6.33333V8.83333M6.66667 8.83333H13.3333M6.66667 8.83333V11.3333M13.3333 8.83333V11.3333"
                      stroke={item.bag ? "white" : "#1A1A1A"}
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
