import React, { useEffect } from "react";
import { useState } from "react";
import CartItems from "./CartItems.tsx";
import { ICart, IItem } from "../model/ICart";
//import CartItems from "./CartItems.tsx";

const MainCart = () => {
  const [cartItems, setCartItems] = useState<ICart>();

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/carts/user/5");
    const resJson = await res.json();
    console.log(resJson.carts);
    return resJson.carts;
  };

  useEffect(() => {
    fetch("https://dummyjson.com/carts/user/5")
      .then((data) => data.json())
      .then((data) => setCartItems(data.carts[0]));
    console.log(cartItems);
  }, []);

  return (
    <>
      <table id="products">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <CartItems cartItems={cartItems?.products} />
        </tbody>
      </table>
      <div className="total">
        <div>
        <h4>TotalQuantity:</h4>
        <p>{cartItems?.totalQuantity}</p>
        </div>
        <div>
        <h4>TotalProducts:</h4>
        <p>{cartItems?.totalProducts}</p>
        </div>
        <div>
        <h4>TotalPrice:</h4>
        <p>${cartItems?.total}</p>
        </div>
      </div>
    </>
  );
};

export default MainCart;
