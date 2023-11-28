import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Dropdown } from 'primereact/dropdown';
import CartItem from "../CartItem/CartItem"
import "./Checkout.css"
import SimpleReactValidator from "simple-react-validator"
import { useNavigate } from "react-router-dom";
import cities from "../../utils/cities"
import { Helmet } from "react-helmet";

export default function CheckOut() {
    const server = import.meta.env.PROD ? "https://casafutbol-production.up.railway.app" : " http://localhost:3001"

    const [visible, setVisible] = useState(false);
    const validator = new SimpleReactValidator({
        messages: {
            default: "Verificá que este campo este completo o los datos ingresados sean válidos",

        }
    })
    const navigate = useNavigate()
    const [data, setData] = useState({});
    const [isSubmited, setIsSubmited] = useState(false)
    const { cartItems, setDisplayCart, total } = useContext(CartContext)
    const [selectedCity, setSelectedCity] = useState()
    const [order, setOrder] = useState()
    // const [orderId, setOrderId] = useState()  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmited(true)
        navigate("/checkout/end")
        const response = await fetch(`${server}/orders/neworder`, {
            method: 'POST',
            body: JSON.stringify({ order: order }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Could not fetch products')
        }
        localStorage.setItem('cartItems', JSON.stringify([]))
    }

    const handleNextStep = (e) => {
        setIsSubmited(true)
        e.preventDefault();
        setData({ ...data, "Provincia": selectedCity.name })
        if (validator.allValid()) {
            setOrder({
                buyer: data,
                products: cartItems,
                total: total()
            })
            setVisible(true)
        }
    }

    useEffect(() => {
        setDisplayCart(false)
    }, [])

    return (
        <div className="checkout-container">
            <Helmet>
                <title>Datos de Envío | Casa Futbol</title>
                <meta name="description" content="checkout"></meta>
            </Helmet>
            <form onSubmit={handleSubmit} className="formulario">
                <div className="formulario-datospersonales">
                    {isSubmited && validator.showMessages()}
                    <h2>Tus Datos</h2>
                    <div className="input-container">
                        <label className={data.Nombre && "filled"}>Nombre</label>
                        <input
                            name="Nombre"
                            type="text"
                            onChange={handleChange}
                        />

                        {validator.message('Nombre', data.Nombre, "required|alpha_space")}
                    </div>
                    <div className="input-container">
                        <label className={data.Apellido && "filled"}>
                            Apellido
                        </label>
                        <input
                            name="Apellido"
                            type="text"
                            onChange={handleChange}
                            onBlur={() => console.log("blur")}
                        />
                        {validator.message('Apellido', data.Apellido, "required|alpha_space")}
                    </div>
                    <div className="input-container">
                        <label className={data.Email && "filled"}>
                            Email
                        </label>
                        <input
                            name="Email"
                            type="email"
                            onChange={handleChange} />
                        {validator.message('Email', data.Email, "required|email")}
                    </div>
                    <div className="input-container">
                        <label className={data.Teléfono && "filled"}>
                            Teléfono
                        </label>
                        <input
                            name="Teléfono"
                            type="tel"
                            onChange={handleChange} />
                        {validator.message('Teléfono', data.Teléfono, "required|min:10")}
                    </div>
                </div>
                <div className="formulario-datosenvio">
                    <h2>Datos de Envío</h2>
                    <div >
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                            placeholder="Provincia" className="w-full md:w-14rem" />
                        {validator.message('Provincia', selectedCity, "required")}
                    </div>
                    <div className="input-container">
                        <label className={data.Localidad && "filled"}>
                            Localidad / Barrio
                        </label>
                        <input
                            name="Localidad"
                            type="text"
                            onChange={handleChange} />
                        {validator.message('Localidad', data.Localidad, "required|alpha_space")}
                    </div>
                    <div className=" inputs-adress">
                        <div className="input-container">
                            <label className={data.Dirección && "filled"}>
                                Dirección
                            </label>
                            <input
                                name="Dirección"
                                type="text"
                                onChange={handleChange} />
                            {validator.message('Dirección', data.Dirección, "required|alpha_num_space")}
                        </div>
                        <div className="input-container">
                            <label className={data.Timbre && "filled"}>
                                Depto
                            </label>
                            <input
                                name="Timbre"
                                type="text"
                                onChange={handleChange} />
                        </div>
                        <div className="input-container">
                            <label className={data.CódigoPostal && "filled"}>
                                Código Postal
                            </label>
                            <input
                                name="CódigoPostal"
                                type="text"
                                onChange={handleChange} />
                            {validator.message('CódigoPostal', data.CódigoPostal, "required")}
                            <a href="https://www.correoargentino.com.ar/formularios/cpa" rel="noreferrer" target="_blank" className="conocer-cp">
                                No sé mi código postal
                            </a>
                        </div>
                    </div>
                </div>
            </form>
            <div className="checkout-items">
                <h2>Tu Pedido</h2>
                {
                    cartItems.length >= 1 ? cartItems.map((item, i) => {
                        return <CartItem key={i} item={item} />
                    }) : <h2>Tu carrito está vacio</h2>
                }
                <div className="checkout-shipping">
                    <p>Envio a través del Correo Argentino:
                        entre 2 y 5 dias hábiles
                    </p>
                    <p >Gratis</p>
                </div>
                <div className="checkout-total">
                    <h2>Total:</h2>
                    <h2>{total()}</h2>
                </div>
                <button className="checkout-btn"
                    type="submit" onClick={handleNextStep}>COMPRAR</button>
            </div>
            <Modal visible={visible} setVisible={setVisible} order={order ? order.buyer : ""} handleSubmit={handleSubmit} />
        </div>
    )
}
import { Dialog } from 'primereact/dialog';

function Modal({ visible, setVisible, order, handleSubmit }) {


    return (
        <div className="card flex justify-content-center">

            <Dialog header="Verifique que los siguientes datos sean correctos" visible={visible} onHide={() => setVisible(false)}
                breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <div className="m-0">

                    {order && Object.keys(order).map((value, i) => {
                        return <p key={i} className="check-order-data">
                            {value} : {order[value]}
                        </p>
                    })
                    }
                </div>
                <div className="checkout-modal-btns">
                    <button onClick={() => setVisible(false)}>
                        MODIFICAR
                    </button>
                    <button onClick={handleSubmit}>
                        FINALIZAR
                    </button>
                </div>
            </Dialog>
        </div>
    )
}

