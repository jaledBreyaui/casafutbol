import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./Carticon.css"


export default function CartIcon() {
    const { cartItems, setDisplayCart } = useContext(CartContext)

    return (
        <div className="cartIcon" >
            <i onClick={() => setDisplayCart(true)} className="pi pi-shopping-cart" style={{ color: 'white', fontSize: "1.5rem" }}></i>
            {cartItems.length > 0 && <span className="cart-icon-quant">{cartItems.length}</span>}
        </div>
    )
}
