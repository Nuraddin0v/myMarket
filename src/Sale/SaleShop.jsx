import React, { useEffect, useState } from "react";
import "./SaleShop.scss";
import { SaleShopData } from "./SaleShopData.jsx";
const SaleShop = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());
  function Zero(num) {
    if (num >= 10) {
      return num;
    } else {
      return "0" + num;
    }
  }
  function SaleCalc(saleDate) {
    const targetTime = new Date(saleDate).getTime();
    const timeBetween = targetTime - currentTime;
    const seconds = Math.floor((timeBetween / 1000) % 60);
    const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
    const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
    return [
      <div style={{ display: "flex" }}>
        <div>
          {Zero(days)} <br />
          days
        </div>
        :
        <div>
          {Zero(hours)}
          <br />
          hours
        </div>
        :
        <div>
          {Zero(minutes)}
          <br />
          mins
        </div>
        :
        <div>
          {Zero(seconds)} <br />
          secs
        </div>
      </div>,
    ];
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // SaleCalc();
  // console.log(saleCalc());
  //   console.log(new Date());
  //   React.useEffect(() => {});
  // let Date = new Date(2023, 10, 9);
  return (
    <div>
      <div className="container boxes">
        {SaleShopData.map((item, index) => {
          return (
            <div key={index} className={`box ${item.className}`}>
              <p>{item.description}</p>
              <h1>{item.title}</h1>
              <h3>
                {item.data ? SaleCalc(item.data) : ""}
                {item.sale?.sale} <span> {item.sale?.saleSpan}</span>
              </h3>
              {/* <h1>{console.log(upDate(2023, 10, 9))}</h1> */}
              <button>
                Shop now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                >
                  <path
                    d="M16 7.50049H1"
                    stroke="#00B307"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.95001 1.47559L16 7.49959L9.95001 13.5246"
                    stroke="#00B307"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SaleShop;
