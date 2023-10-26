import { CartContext } from "../../context/CartContext"
import "./Cartitem.css"
import { useContext } from "react"
import { useLocation } from "react-router-dom"
function CartItem({ item }) {
    const { removeFromCart } = useContext(CartContext)
    const location = useLocation()

    const peso = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
    })

    return (
        <div className="cart-item">
            <div className="cart-item-img">
                <img src={'https://casafutbol-production.up.railway.app/' + item.path} />
            </div>
            <div className="cart-item-data">
                <p className="cart-item-title">{item.title}</p>
                <p className="cart-item-size">Talle: {item.talleElegido}</p>
                <p className="cart-item-price">  {peso.format(item.price)}  </p>
            </div>
            {
                location.pathname.includes("checkout") ? <></> : <div className="cart-item-delete">

                    <i className="pi pi-trash"
                        style={{ fontSize: "1.2rem" }}
                        onClick={() => removeFromCart(item._id, item.talleElegido)}
                    > </i>

                </div>
            }

        </div>
    )
}

export default CartItem 