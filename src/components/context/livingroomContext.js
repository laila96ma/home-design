// livingroomContext.js
import { createContext, useContext, useState } from "react";

const LivingroomContext = createContext({});

export const LivingroomProvider = ({ children }) => {
  const [livingroomItems, setLivingroomItems] = useState([]);

  const cartQuantity=livingroomItems.reduce((quantity,item)=>
    item.quantity+quantity
,0)

  const getLivingroomItemQuantity = (id) => {
    return livingroomItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseLivingroomItemQuantity = (id) => {
    setLivingroomItems((currItems) => {
      if (currItems.find((item) => item.id === id) === null) {
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

  const decreaseLivingroomItemQuantity = (id) => {
    setLivingroomItems((currItems) => {
      if (currItems.find((item) => item.id === id) === null) {
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

  const removeLivingroomItem = (id) => {
    setLivingroomItems((cartItems) =>
      cartItems.filter((item) => item.id !== id)
    );
  };

  return (
    <LivingroomContext.Provider
      value={{
        livingroomItems,
        getLivingroomItemQuantity,
        increaseLivingroomItemQuantity,
        decreaseLivingroomItemQuantity,
        removeLivingroomItem,
        cartQuantity,
      }}
    >
      {children}
    </LivingroomContext.Provider>
  );
};

export const useLivingroom = () => {
  return useContext(LivingroomContext);
};
