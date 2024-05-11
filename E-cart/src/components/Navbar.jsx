import React from "react";
import { Link } from "react-router-dom";
import { items } from "./Data";

function Navbar({ setData }) {
  const filterBycategory = (category) => {
    const element = items.filter((product) => product.category === category);
    console.log(element);
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    console.log(element);
    setData(element);
  };

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-Cart
          </Link>
          <div className="search-bar">
            <input type="text" placeholder="Search Products" />
          </div>
          <Link to={"/cart"} className="cart">
            Cart
          </Link>
        </div>
        <div className="nav-bar-wrapper">
          <div className="items">Filter by {"->"}</div>
          <div onClick={() => setData(items)} className="items">
            No Filter
          </div>
          <div onClick={() => filterBycategory("mobiles")} className="items">
            Mobiles
          </div>
          <div onClick={() => filterBycategory("laptops")} className="items">
            Laptops
          </div>
          <div onClick={() => filterBycategory("tablets")} className="items">
            Tablets
          </div>
          <div onClick={() => filterByPrice("29999")} className="items">
            {">="} 29999
          </div>
          <div onClick={() => filterByPrice("49999")} className="items">
            {">="} 49999
          </div>
          <div onClick={() => filterByPrice("69999")} className="items">
            {">="} 69999
          </div>
          <div onClick={() => filterByPrice("89999")} className="items">
            {">="} 89999
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
