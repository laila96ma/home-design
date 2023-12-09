import React from "react";
import { CardBody, CardHeader, Card, CardFooter } from "react-bootstrap";
import { useShoppingCart } from "./context/shoppingCart";
import CartItem from "./cartItem";
import CartBathItem from "./CartBathItem";
import CartBedItem from "./CartBedItem";
import CartLivingItem from "./CartLivingItem";
import { Link } from "react-router-dom";
import "./styles/logo.css";
import "./styles/cartIcon.css";

const CartIconGl = () => {
  const { cartItems } = useShoppingCart();

  return (
    <Card className="card">
      <CardHeader>Cart</CardHeader>
      <CardBody>
        {cartItems.map((item) => {
            return (
                <div>
                    <CartItem key={item.id} {...item} quantity={item.quantity} />
                    <CartBathItem key={item.id} {...item} quantity={item.quantity} />
                    <CartBedItem key={item.id} {...item} quantity={item.quantity} />
                    <CartLivingItem key={item.id} {...item} quantity={item.quantity} />
                </div>
            )}
        )}
      </CardBody>
      <CardFooter>
      <button type="submit" ><Link to="/passCommande" className="link">Commander</Link></button>

      </CardFooter>
    </Card>
  );
};

export default CartIconGl;
