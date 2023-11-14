import React from "react";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <div>
      <div className="container home-container">
        <div className="item__one">
          <div className="date__one">
            <h1>Fresh & Healthy Organic Food </h1>
            <div className="desc">
              <div className="devider"></div>
              <div className="text">
                <h3>
                  Sale up to <span>30% OFF</span>
                </h3>
                <p>Free shipping on all your order.</p>
              </div>
            </div>
            <button id="button">
              Shop now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
              >
                <path
                  d="M16.5 7.50055H1.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.45 1.47552L16.5 7.49953L10.45 13.5245"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="item__two">
          <div className="date__two">
            <h3>Summer Sale</h3>
            <h1>75% OFF</h1>
            <p>Only Fruit & Vegetable</p>
            <button id="button">
              Shop now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
              >
                <path
                  d="M16.5 7.50055H1.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.45 1.47552L16.5 7.49953L10.45 13.5245"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="item__three">
          <div className="date__three">
            <p>Best Deal</p>
            <h1>Special Products Deal of the Month</h1>
            <button id="button">
              Shop now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
              >
                <path
                  d="M16.5 7.50055H1.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.45 1.47552L16.5 7.49953L10.45 13.5245"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
