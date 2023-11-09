import React from "react";
import "./SaleSummer.scss";
const SaleSummer = () => {
  return (
    <div>
      <div className="container bg-container">
        <h3>Summer Sale</h3>
        <h1>
          <span>37% </span>OFF
        </h1>
        <p>
          Free on all your order, Free Shipping and 30 days money-back guarantee
        </p>
        <button>
          Shop now{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
          >
            <path
              d="M16 7.50049H1"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.94995 1.47559L16 7.49959L9.94995 13.5246"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SaleSummer;
