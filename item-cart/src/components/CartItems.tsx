import React from "react";
import { IItem } from "../model/ICart";

interface CartItemsProps {
  cartItems:  IItem[] | undefined; 
}

const CartItems = ({cartItems} : CartItemsProps) => {
  console.log(cartItems); 

 return(
  
      <>
        {cartItems?.map(cart => (
        <tr key={cart.id}>
          <td>{cart.title}</td>
          <td>${cart.price}</td>
          <td>{cart.quantity}</td>
          <td>{cart.total}</td>
        </tr>

      ))}
      </>
 );

}

export default CartItems;