// cartAccessIcon.js (for general accessories)
import React from "react";
import { CardBody, CardHeader, Card, CardFooter } from "react-bootstrap";
import { useShoppingCart } from "./context/shoppingCart";
import CartBathItem from './CartBathItem';
import { Link } from "react-router-dom";
import "./styles/logo.css";
import "./styles/cartIcon.css"; 

const CartBathIcon = () => {
  const { cartItems } = useShoppingCart();

  return (
    <Card>
      <CardHeader>Cart</CardHeader>
      <CardBody>
        {cartItems.map((item) => (
          <CartBathItem key={item.id} {...item} quantity={item.quantity} />
        ))}
      </CardBody>
      <CardFooter>
      <button type="submit"> <Link to="/passCommade" className="link">Commander</Link></button>
      </CardFooter>
    </Card>
  );
};

export default CartBathIcon;

