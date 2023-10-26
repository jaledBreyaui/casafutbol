import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Dropdown } from 'primereact/dropdown';
import CartItem from "../CartItem/CartItem"
import "./Checkout.css"

export default function CheckOut() {
    const [data, setData] = useState({

    });
    const { cartItems, setDisplayCart, total } = useContext(CartContext)
    const [selectedCity, setSelectedCity] = useState()
    // const [orderId, setOrderId] = useState();
    // const [itemsComprados, setItemsComprados] = useState()

    // const [precio, setPrecio] = useState();
    const ciudades = [
        { name: "Buenos Aires" },
        { name: "Ciudad Autónoma de Buenos Aires" },
        { name: "Catamarca" },
        { name: "Chaco" },
        { name: "Chubut" },
        { name: "Córdoba" },
        { name: "Corrientes" },
        { name: "Entre Ríos" },
        { name: "Formosa" },
        { name: "Jujuy" },
        { name: "La Pampa" },
        { name: "La Rioja" },
        { name: "Mendoza" },
        { name: "Misiones" },
        { name: "Neuquén" },
        { name: "Río Negro" },
        { name: "Salta" },
        { name: "San Juan" },
        { name: "San Luis" },
        { name: "Santa Cruz" },
        { name: "Santa Fe" },
        { name: "Santiago del Estero" },
        { name: "Tierra del Fuego" },
        { name: "Tucumán" },
    ]

    const peso = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
        console.log(data)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({ ...data, "Provincia": selectedCity.name })
        const order = {
            datosdelComprador: data,
            productos: cartItems,
        }
        console.log(order)
    }

    useEffect(() => {
        setDisplayCart(false)
    }, [])

    return (
        <div className="checkout-container">
            <form onSubmit={handleSubmit} className="formulario">
                <div className="formulario-datospersonales">
                    <h2>Tus Datos</h2>
                    <div className="input-container">
                        <label className={data.nombre && "filled"}>Nombre</label>
                        <input
                            name="nombre"
                            type="text"
                            onChange={handleChange} />

                    </div>
                    <div className="input-container">
                        <label className={data.apellido && "filled"}>
                            Apellido
                        </label>
                        <input
                            name="apellido"
                            type="text"
                            onChange={handleChange} />
                    </div>
                    <div className="input-container">
                        <label className={data.email && "filled"}>
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            onChange={handleChange} />
                    </div>
                    <div className="input-container">
                        <label className={data.telefono && "filled"}>
                            Teléfono
                        </label>
                        <input
                            name="telefono"
                            type="tel"
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="formulario-datosenvio">
                    <h2>Datos de Envío</h2>
                    <div >
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={ciudades} optionLabel="name"
                            placeholder="Provincia" className="w-full md:w-14rem" />
                    </div>
                    <div className="input-container">
                        <label className={data.localidad && "filled"}>
                            Localidad
                        </label>
                        <input
                            name="localidad"
                            type="text"
                            onChange={handleChange} />
                    </div>
                    <div className=" inputs-adress">
                        <div className="input-container">
                            <label className={data.direccion && "filled"}>
                                Dirección
                            </label>
                            <input
                                name="direccion"
                                type="text"
                                onChange={handleChange} />
                        </div>
                        <div className="input-container">
                            <label className={data.timbre && "filled"}>
                                Depto
                            </label>
                            <input
                                name="timbre"
                                type="text"
                                onChange={handleChange} />
                        </div>

                        <div className="input-container">
                            <label className={data.cp && "filled"}>
                                Código Postal
                            </label>
                            <input
                                name="cp"
                                type="text"
                                onChange={handleChange} />
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
                    <h2>{peso.format(total())}</h2>
                </div>
                <button className="checkout-btn"
                    type="submit" onClick={handleSubmit}>COMPRAR</button>
            </div>
        </div>
    )
}
