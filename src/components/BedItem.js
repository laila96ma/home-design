import React from "react";
import { Card } from "react-bootstrap";
import { useBedroom } from "./context/BedroomContext"; 
import "./styles/logo.css";

const BedItem = ({ id, nom, prix, description, Image }) => {
  const {
    getItemsQuantity, 
    increaseCartQuantity,
    decreaseCartQuantity,
    RemoveItem,
   
  } = useBedroom();

  const quantity = getItemsQuantity(id);

  return (
    <Card>
      <Card.Img src={Image} alt={nom} variant="top" style={{ objectFit: "cover" }} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="">{nom}</span>
          <span className="text-danger ml-2">{prix}</span>
        </Card.Title>
        <div>
          <p>{description}</p>
          {quantity === 0 ? (
            <button
              type="submit"
              onClick={() => {
                increaseCartQuantity(id);
               
              }}
            >
              +Add to cart
            </button>
          ) : (
            <div className="d-flex align-items-center flex-column" style={{ gap: "0.5rem" }}>
              <div className="d-flex align-items-center justify-content-center" style={{ gap: "0.5rem" }}>
                <button onClick={() => { decreaseCartQuantity(id);  }}>-</button>
                <span className="fs-3"> {quantity} in cart</span>
                <button onClick={() => { increaseCartQuantity(id); }} >+</button>
              </div>
              <button onClick={() => { RemoveItem(id);  }}>Remove</button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default BedItem;
