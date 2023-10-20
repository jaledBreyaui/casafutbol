import { CartContext } from "../../context/CartContext"
import "./Cartitem.css"


import { useContext } from "react"
function CartItem({ item }) {
    const { removeFromCart } = useContext(CartContext)


    return (
        <div className="cart-item">
            <div className="cart-item-img">
                <img src={'http://localhost:3001' + item.path} />
            </div>
            <div className="cart-item-data">
                <p className="cart-item-title">{item.title}</p>
                <p className="cart-item-size">Talle: {item.talleElegido}</p>
                <p className="cart-item-price"> $ {item.price.toLocaleString("ar")}  </p>
            </div>
            <div className="cart-item-delete">

                <i className="pi pi-trash"
                    style={{ fontSize: "1.2rem" }}
                    onClick={() => removeFromCart(item._id, item.talleElegido)}
                > </i>

            </div>
        </div>
    )
}

export default CartItem 