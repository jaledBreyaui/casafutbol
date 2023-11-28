import { useState, useEffect } from "react"


export default function Orders() {
    const [isLoged, setIsloged] = useState(false)

    return (
        <div className="admin-orders-container">
            {
                !isLoged ? <LogIn setIsloged={setIsloged} /> : <LoggedIn />
            }
        </div>
    )
}


function LogIn({ setIsloged }) {
    const [data, setData] = useState()
    const validateSignIn = (e) => {
        e.preventDefault()
        if (data.usuario === import.meta.env.VITE_ADMIN_USER && data.contraseña === import.meta.env.VITE_ADMIN_PASS) {
            setIsloged(true)
        }
    }
    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    return (
        <div className="admin-orders-signin">
            <form >
                <input placeholder="usuario" type="text" name="usuario" onChange={handleChange}></input>
                <input placeholder="contra" type="password" name="contraseña" onChange={handleChange}></input>
                <button onClick={validateSignIn}>Ir</button>
            </form>
        </div>
    )
}

function LoggedIn() {
    const server = import.meta.env.PROD ? "https://casafutbol-production.up.railway.app" : " http://localhost:3001"
    const [orders, setOrders] = useState([])
    const fetchOrders = async () => {
        const response = await fetch(`${server}/orders/getorders`)
        if (!response.ok) {
            throw new Error('Could not fetch orders')
        }
        const data = await response.json()
        setOrders(data)
    }

    function getByValue(order) {
        const entries = Object.entries(order)
        return entries.map((entry) => {
            return <p key={entry[0]}>{entry[0]} : {entry[1]}</p>

        })
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        const id = e.target.name
        const response = await fetch(`${server}/orders/deleteorder`, {
            method: 'DELETE',
            body: JSON.stringify({ id: id }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Could not fetch products')
        }
        const result = await response.json();
        console.log(result)
    }
    useEffect(() => {
        fetchOrders()
    }, [handleDelete])

    return (
        <div className="admin-orders-wrapper">
            {orders.length > 0 ?
                orders.map((order, i) => {
                    return <div key={i} className="admin-order">
                        <p>#{order._id} </p>
                        <div className="admin-orders-datos">
                            {getByValue(order.buyer)}
                        </div>
                        <div className="admin-orders-products">
                            {order.products.map((prod, i) => {
                                return <li key={i}>{prod.title} ({prod.talleElegido})</li>
                            })}
                        </div>
                        <div>
                            <p>
                                Total: {order.total}
                            </p>
                            <p>Fecha de compra: {order.date}</p>
                        </div>
                        <input type="button" className="admin-orders-cancel-btn" value="Cancelar Compra" name={order._id} onClick={handleDelete} />
                    </div>
                }) : <h2> No hay nuevas compras</h2>
            }
        </div>
    )
}