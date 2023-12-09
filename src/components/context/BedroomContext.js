import { createContext, useContext, useState } from "react";

const BedroomContext = createContext({});

export const BedroomProvider = ({ children }) => {
  const [BedroomItems, setBedroomItems] = useState([]);
  
  const cartQuantity=BedroomItems.reduce((quantity,item)=>
    item.quantity+quantity
,0)

  const getBedQuantity = (id) => {
    return BedroomItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setBedroomItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id) => {
    setBedroomItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const RemoveItem = (id) => {
    setBedroomItems((cartItems) => cartItems.filter((item) => item.id !== id));
  };

  return (
    <BedroomContext.Provider
      value={{
        BedroomItems,
        getBedQuantity, 
        increaseCartQuantity,
        decreaseCartQuantity,
        RemoveItem,
        cartQuantity,
      }}
    >
      {children}
    </BedroomContext.Provider>
  );
};

export const useBedroom = () => {
  return useContext(BedroomContext);
};
