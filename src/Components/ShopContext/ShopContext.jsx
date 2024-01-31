import React, {createContext} from "react";
import All_product_data from "../Assets/AllProduct";

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {

    const  contextValue = {All_product_data}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;