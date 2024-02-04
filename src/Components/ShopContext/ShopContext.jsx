import React, {createContext, useState} from "react";
import All_product_data from "../Assets/AllProduct";

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let  cart ={}
    for (let index = 0; index < All_product_data.length + 1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart());
    

    const addToCart = (itmeId) => {
        setCartItems((prev) => ({...prev,[itmeId]:prev[itmeId]+1 }))
        
    }
    const removeToCart = (itmeId) => {
        setCartItems((prev) => ({...prev,[itmeId]:prev[itmeId]-1 }))
    }

    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = All_product_data.find((product) => product.id == Number(item));
            totalAmount += itemInfo.Price;
          }
        }
        return totalAmount;
      };
      
      
      
    const  contextValue = {All_product_data,cartItems,addToCart,removeToCart,getTotalCartAmount}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;