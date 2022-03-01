import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const newItem = { item, quantity };
    if (!isInCart(item.id)) {
      setCart((prevState) => [...prevState, newItem]);
    } else if (isInCart(item.id)) {
      const updatedCart = cart.map((order) => {
        if (order.item.id === item.id) {
          return { ...order, quantity: quantity + order.quantity };
        } else {
          return order;
        }
      });
      setCart(updatedCart);
    }
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((element) => element.item.id !== id));
  };

  const clearAll = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    const result = cart.find((element) => element.item.id === id);
    if (result === undefined) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearAll, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
