"use client"
import { createContext, useState } from "react"

const initialState={
    id:0,
    items:[],
    addItem:()=>{},
    removeItem:()=>{},
    totalPrice:0,
    count:0
}

export const CartContext=createContext(initialState);

export const CartContextProvider=({children})=>{
    const [items,setItems]=useState([]);
    const [price,setPrice]=useState(0);

    const addItemInCart=(item,id)=>{
        setItems(prev=>{
            const idx=prevItems.findIndex((i)=>i.id===item.id);

            if(idx!==-1){
                const updatedItems=[...prevItems];
                updatedItems[idx]={
                    ...updatedItems[idx],count:updatedItems[idx].count+1
                }

                return updatedItems;
            }
            else{
                return [...prevItems,{...item,count:1}];
            }
        });
        setPrice(prev=>prev+item.price);
    };

    const removeItemInCart=(id)=>{
        setPrice(prev=>prev-items[id].price);
        const filteredItems=items.filter((el,idx)=>idx!=id);
        setItems(filteredItems);
    }

    return(
        <CartContext.Provider value={{items,price,addItem:addItemInCart,removeItem:removeItemInCart}}>
            {children}
        </CartContext.Provider>
    )
}