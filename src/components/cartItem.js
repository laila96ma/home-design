import React from "react";
import { Stack } from "react-bootstrap";
import dataAccess from "./data/dataAccess.json";
import { useShoppingCart } from "./context/shoppingCart";

const CartItem = ({ id, quantity }) => {
    const item = dataAccess.find((i) => i.id === id);
    const { RemoveItem,getTotal  } = useShoppingCart();

    if (item == null) {
        return null;
    }

    const total = parseFloat(item.prix) * quantity;



    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center" style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "15px", 
          }}>
            <img
                src={item.Image}
                alt="cart-img"
                style={{ height: "75px", width: "125px", objectFit: "cover" }}
            />
            <div className="ml-auto">
                <div>
                    {item.nom}{" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: "0.65rem" }}>
                            {" "}
                            x{quantity}
                        </span>
                    )}
                    <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                       Price: {item.prix}
                    </div>
                </div>
                <div>
                    Total: {total} 
                </div>
            </div>
            
            <button variant="outline-danger" size="sm" onClick={() => RemoveItem(id)}>
                &times;
            </button>
             
       
        </Stack>
       
    );
};

export default CartItem;
/* <div>
        <strong>Overall Total: {getTotal()}</strong>
        </div>*/