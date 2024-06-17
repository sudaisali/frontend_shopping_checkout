import { createContext, useState } from "react";

export const CartContext = createContext({
    items: [],
    getCartItemQuantity : ()=>{},
    addOneItem : ()=>{},
    removeOneItem : ()=>{},
    deleteItem: ()=>{},
    itemTotal : ()=>{},
    totalCartItemsPrice  : ()=>{},
    isavaliable:()=>{}
})

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([])

    const getCartItemQuantity = (item) =>{
       const itemQuantity = cartItems.find((cartItem)=> cartItem.id === item.id )?.quantity
       if(itemQuantity === undefined){
        return 0
       }
       return itemQuantity
    }
     const isavaliable = (item) =>{
        const product = cartItems.find((cartItem) => cartItem.id === item.id);
        if (product && product.quantity >= product.product_quantity) {
            return false;
        }
        return true;
       
     }

    const addOneItem = (item) => {
        const itemQuantity = getCartItemQuantity(item);
        if (itemQuantity === 0) {
            setCartItems([...cartItems, { 
                'id': item.id, 
                'name': item.name,
                'image': item.image,
                'quantity': 1,
                'product_quantity': item.quantity,
                'price': item.price 
            }]);
        } else {
                setCartItems(
                    cartItems.map((cartItem) => {
                        if (cartItem.id === item.id) {
                            return { ...cartItem, quantity: cartItem.quantity + 1 };
                        } else {
                            return cartItem;
                        }
                    })
                );
        }
    }
    

    const removeOneItem = (item) => {
        const itemQuantity = getCartItemQuantity(item);
        if (itemQuantity > 1) {
            setCartItems(
                cartItems.map((cartItem) => {
                    if (cartItem.id === item.id) {
                        return { ...cartItem, quantity: cartItem.quantity - 1 };
                    } else {
                        return cartItem;
                    }
                })
            );
        } else {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        }
    };

    const deleteItem = (item) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    };

    const itemTotal = (quantity, price) => {
        
        return (quantity*price).toFixed(2);
    };

    const totalCartItemsPrice = () => {
        return cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0).toFixed(2);
    };

    const cartProperties = {
        items : cartItems,
        getCartItemQuantity,
        addOneItem,
        removeOneItem,
        deleteItem,
        itemTotal,
        totalCartItemsPrice,
        isavaliable
    }

    return (
        <CartContext.Provider value={cartProperties}>
            {props.children}
        </CartContext.Provider>
    )

}