export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

<<<<<<< HEAD
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
=======

export const removeItem = (cartItems, cartItemToRemove) => {
>>>>>>> testing
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

<<<<<<< HEAD
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
=======
  if (existingCartItem.quantity === 1 ) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  } else {
    return cartItems.map((cartItem) =>
>>>>>>> testing
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
<<<<<<< HEAD
};
=======
  }
};

>>>>>>> testing
