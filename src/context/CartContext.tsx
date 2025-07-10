"use client";
import { createContext, ReactNode, useState } from "react";
interface ItemProperties{
  id:number,
  name:string,
  desc:string,
  price:number,
  count?:number
}

interface ItemPropertiesWithCount extends ItemProperties {
  count: number;
}

interface CartContextInterface{
  items: Array<ItemProperties>,
  addItem: (item:ItemProperties) => void,
  removeItem: (id: number) =>void,
  price: number,
  totalCount: number,
}

const initialState = {
  items: [],
  addItem: (item:ItemProperties) => {},
  removeItem: (id: number) => {},
  price: 0,
  totalCount: 0,
};

export const CartContext = createContext<CartContextInterface>(initialState);

export const CartContextProvider = ({ children }:{children:ReactNode}) => {
  const [items, setItems] = useState<ItemPropertiesWithCount[]>([]);
  const [price, setPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const addItemInCart = (item:ItemProperties) => {
    setItems((prevItems) => {
      const idx = prevItems.findIndex((i) => i.id === item.id);

      if (idx !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[idx] = {
          ...updatedItems[idx],
          count: updatedItems[idx].count + 1,
        };

        return updatedItems;
      } else {
        return [...prevItems, { ...item, count: 1 }];
      }
    });
    setPrice((prev) => prev + item.price);
    setTotalCount((prev) => prev + 1);
  };

  const removeItemInCart = (id:number) => {
    let removedItemPrice:number=0;
    setItems((prevItems) => {
      const idx = prevItems.findIndex((item) => item.id === id);
      removedItemPrice=items[idx].price;
      if (idx != -1) {
        if (prevItems[idx].count > 1) {
          const updatedItems = [...prevItems];
          updatedItems[idx] = {
            ...updatedItems[idx],
            count: updatedItems[idx].count - 1,
          };
          return updatedItems;
        } else {
          const updatedItems = prevItems.filter((item, index) => index != idx);
          return updatedItems;
        }
      }

      return prevItems;
    });
    setPrice(prevPrice=>prevPrice-removedItemPrice);
    setTotalCount((prev) => prev - 1);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        price,
        addItem: addItemInCart,
        removeItem: removeItemInCart,
        totalCount,
      }}
>
      {children}
    </CartContext.Provider>
  );
};
