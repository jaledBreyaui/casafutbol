import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const peso = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
    })
    const [cartItems, setCartItems] = useState([])
    const [displayCart, setDisplayCart] = useState(false)
    const showCart = () => {
        setDisplayCart(!displayCart)
    }
    useEffect(() => {
        const cartItemsData = localStorage.getItem('cartItems')
        if (cartItemsData) {
            setCartItems(JSON.parse(cartItemsData))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    const addItem = (item, size) => {
        if (size) {
            setCartItems([...cartItems, { ...item, talleElegido: size }])
            setDisplayCart(true)
        } else {
            return "seleccioné un talle"
        }
    }
    const removeFromCart = (id, size) => {
        const newCart = []
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i]._id !== id) newCart.push(cartItems[i])
            if (cartItems[i]._id === id && cartItems[i].talleElegido !== size) newCart.push(cartItems[i])
        }
        setCartItems(newCart)
        // setCartItems(cartItems.filter((cartItem) => {
        //     return (cartItem.talleElegido !== size) && (cartItem._id !== id)
        // }))
    }
    const emptyCart = () => {
        setCartItems([])
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
    // const addToCart = (item, count) => {
    //     if (isInCart(item.id)) {
    //         cartItems.filter((cartItem) => cartItem.quantity = +cartItem.quantity + count)
    //     } else {
    //         setCartItems([...cartItems, { ...item, quantity: count }])
    //     }
    // }
    // const isInCart = (id) => {
    //     return cartItems.find(item => item.id === id)
    // }
    const total = () => {
        const total = []
        cartItems.map((prod) => {
            total.push(Number(prod.price))
        })
        let add = (acc, a) => {
            return acc + a
        }

        return peso.format(total.reduce(add, 0))
    }

    return (
        <CartContext.Provider value={{
            // addToCart,
            removeFromCart,
            emptyCart,
            showCart,
            // isInCart,
            cartItems,
            addItem,
            displayCart,
            setDisplayCart,
            total
        }}>
            {children}
        </CartContext.Provider>
    )

}

