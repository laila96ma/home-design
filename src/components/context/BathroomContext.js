import { createContext, useContext, useState } from "react";

const BathroomContext = createContext({});

export const BathroomProvider = ({ children }) => {
        const [bathroomItems, setBathroomItems] = useState([]);
        const cartQuantity=bathroomItems.reduce((quantity,item)=>
          item.quantity+quantity
        ,0)
      
        const getIBathQuantity = (id) => {
          return bathroomItems.find((item) => item.id === id)?.quantity || 0;
        };
      
  const increaseCartQuantity=(id)=>{
    setBathroomItems((currItems)=>{
          if (currItems.find(item=>item.id===id)==null) {
              return [...currItems,{id,quantity:1}]
          }else{
              return currItems.map((item)=>{
                  if (item.id===id) {
                      return{...item,quantity:item.quantity+1};
                  }else{
                      return item;
                  }
              })
          }
      })
  };
  const decreaseCartQuantity=(id)=>{
    setBathroomItems((currItems)=>{
          if (currItems.find(item=>item.id===id)==null) {
              return currItems.filter((item)=>item.id!==id);
          }else{
              return currItems.map((item)=>{
                  if (item.id===id) {
                      return{...item,quantity:item.quantity-1};
                  }else{
                      return item;
                  }
              })
          }
      })
  };
  const RemoveItem=(id)=>{
    setBathroomItems((cartItems)=>cartItems.filter((item)=>item.id!==id));
  };
  

  return (
    <BathroomContext.Provider
      value={{
        bathroomItems,
        getIBathQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        RemoveItem,
       cartQuantity,

      
      }}
    >
      {children}
    
    </BathroomContext.Provider>
  );
};

export const useBathroom = () => {
  return useContext(BathroomContext);
};