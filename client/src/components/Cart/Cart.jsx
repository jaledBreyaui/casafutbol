import { useContext } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { CartContext } from "../../context/CartContext"
import CartItem from '../CartItem/CartItem';
import "./Cart.css"
import { Link } from 'react-router-dom';


export default function Cart() {
    const { cartItems, setDisplayCart, displayCart, total } = useContext(CartContext)


    return (
        <Sidebar visible={displayCart} position="right" onHide={() => setDisplayCart(false)}
            style={{ width: "30rem" }}
        >
            <div className='cart-container'>
                {
                    cartItems.length >= 1 ? cartItems.map((item, i) => {
                        return <CartItem key={i} item={item} />
                    }) : <h2>Tu carrito está vacio</h2>
                }
                <div className='cart-total'>
                    <div>
                        <p> Envio:</p>
                        <p><strike>$3600</strike> Gratis</p>
                    </div>
                    <div>
                        <p> Total:</p>
                        <p>{total()}</p>
                    </div>
                </div>
                <div className='cart-checkout-btn'>
                    {cartItems.length >= 1 ? <Link to={"/checkout/start"} >
                        INICIAR COMPRA
                    </Link> : <></>}
                </div>
            </div>
        </Sidebar>
    )
}
