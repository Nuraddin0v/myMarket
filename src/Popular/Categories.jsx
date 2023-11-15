import React from "react";
import "./Categories.scss";
import { CategoriesData } from "./CategoriesData";
// import "../App.css";
const Categories = () => {
  return (
    <div>
      <div className="categories">
        <div className="container">
          <div className="title">
            <h1>Popular Categories</h1>
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
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.94995 0.975464L16 6.99946L9.94995 13.0245"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="popularCategories">
            {CategoriesData?.map((item) => {
              return (
                <div key={item.id} className="popularCategoria">
                  <img src={item.url} alt="" />
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
