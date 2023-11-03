import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./Carticon.css"
import { useLocation } from "react-router-dom"

export default function CartIcon() {
    const { cartItems, setDisplayCart } = useContext(CartContext)
    const location = useLocation()
    return (
        <div className={location.pathname.includes("checkout") ? "hideCartIcon" : "cartIcon"} >
            <i onClick={() => setDisplayCart(true)} className="pi pi-shopping-cart" style={{ color: 'white' }}></i>
            {cartItems.length > 0 && <span className="cart-icon-quant">{cartItems.length}</span>}
        </div>
    )
}
