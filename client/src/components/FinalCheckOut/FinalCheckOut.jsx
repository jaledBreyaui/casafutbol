import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import "./FinalCheckOut.css"

export default function FinalCheckOut() {
    const { cartItems, total } = useContext(CartContext)
    const peso = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
    })
    return (
        <main className="checkout-end-container">
            <section className="checkout-end-header">
                <h1>¡Gracias por tu compra ya separamos tus productos!</h1>
                <h4>Seguí los siguientes pasos para abonar tu compra y recibirla</h4>
            </section>
            <section className="checkout-info">
                <div className="checkout-info-steps">
                    <div className="checkout-info-steps-1">
                        <span>  <i className="pi pi-credit-card" style={{ color: "black", fontSize: "2rem" }}></i></span>
                        <div>
                            1. Realiza una transferencia o depósito por el total de tu compra a la siguiente cuenta bancaria:<br></br>
                            <p><strong>CBU: 4530000800012191244277 </strong></p>
                            <p><strong>ALIAS:  CASAFUTBOLARG </strong></p>
                            <p><strong>TITULAR: MARGULIES FACUNDO </strong></p>
                        </div>
                    </div>
                    <div className="checkout-info-steps-2">
                        <span> <i className="pi pi-whatsapp" style={{ color: "black", fontSize: "2rem" }}></i></span>
                        <div>2. Envía el comprobante de la transferencia a nuestro Whatsapp
                            <a href="https://wa.me/1121579897"><strong> 1121579897. </strong></a>
                            Hasta no enviar el comprobante la compra no se computa.
                            Es necesario que podamos ver el código de operación, fecha, importe y destino </div>
                    </div>
                    <div className="checkout-info-steps-2">
                        <span>  <i className="pi pi-check-circle" style={{ color: "green", fontSize: "2rem" }}></i></span>
                        <div>3. Verificamos tus datos y enviamos tu compra</div>
                    </div>
                </div>
                <div className="checkout-info-order">

                    <h2>Tu Pedido</h2>
                    {
                        cartItems.length >= 1 ? cartItems.map((item, i) => {
                            return <CartItem key={i} item={item} />
                        }) : <h2>Tu carrito está vacio</h2>
                    }
                    <div className="checkout-total">
                        <h2>Total:</h2>
                        <h2>{peso.format(total())}</h2>
                    </div>
                </div>

            </section>
        </main >
    )
}
