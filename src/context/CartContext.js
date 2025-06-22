"use client";
import { createContext, useState } from "react";

const initialState = {
  id: 0,
  items: [],
  addItem: () => {},
  removeItem: () => {},
  totalPrice: 0,
  count: 0,
  totalCount: 0,
};

export const CartContext = createContext(initialState);

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const addItemInCart = (item, id) => {
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

  const removeItemInCart = (id) => {
    let removedItemPrice;
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
