import { createContext, useContext, useState  } from "react";


const ShoppingCart=createContext({});

 export const ShoppingCartProvider=({children})=>{
    const [cartItems,setcartItems]=useState([]);
    
    const cartQuantity=cartItems.reduce((quantity,item)=>
    item.quantity+quantity
,0)
    const getItemsQuantity=(id)=>{
        return cartItems.find((item)=>item.id===id)?.quantity||0;
    };
    const increaseCartQuantity=(id)=>{
        setcartItems((currItems)=>{
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
        setcartItems((currItems)=>{
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
        setcartItems((cartItems)=>cartItems.filter((item)=>item.id!==id));
    };
   
    return(
        <ShoppingCart.Provider value={{
        cartItems,
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        RemoveItem,
        cartQuantity,
       
        }}>
            {children}
         
        </ShoppingCart.Provider>
    )
};
 export const useShoppingCart=() =>{
    return useContext(ShoppingCart)
 }
