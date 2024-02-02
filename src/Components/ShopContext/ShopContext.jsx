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
        console.log(cartItems)
    }
    const removeToCart = (itmeId) => {
        setCartItems((prev) => ({...prev,[itmeId]:prev[itmeId]-1 }))
    }
    const  contextValue = {All_product_data,cartItems,addToCart,removeToCart}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;