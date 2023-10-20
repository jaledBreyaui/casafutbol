import PropTypes from 'prop-types';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Item.css"
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

export default function Item({ prod }) {

    const { addItem } = useContext(CartContext)
    const [size, setSize] = useState()
    const [breadcrumb, setBreadcrumb] = useState({
        title: "",
        generalCategory: "",
        category: ""
    })
    useEffect(() => {
        setBreadcrumb({
            title: prod.title,
            generalCat: "Camisetas",
            category: prod.category
        })

    }, [prod])
    return (
        <div className='item'>
            <Breadcrumbs item={breadcrumb} />
            <div className='item-image'>
                <img src={'http://localhost:3001' + prod.path} />
            </div>
            <div className='item-info'>
                <div>
                    <p className="product-title">{prod.title}</p>
                    <span className='item-info-price'>${prod.price.toLocaleString("ar")}</span>
                    <p>Ver medios de pago <span><i className={"pi pi-credit-card"} style={{ fontSize: '20px' }}></i></span></p>
                </div>
                <div className='item-stock'>
                    <div className='item-stock-size'>
                        <p>Talle : <strong>{size}</strong></p>
                        <p>{ } disponibes </p>
                    </div>
                    < ItemSizeStock stock={prod.stock} setSize={setSize} />
                    <p>Guía de talles <i className='pi pi-angle-down' style={{ fontSize: '20px' }}></i></p>
                </div>
                <button onClick={() => { addItem(prod, size) }}
                    className="addtocart-btn"
                >
                    AÑADIR AL CARRITO
                </button>
            </div>
        </div>
    )
}
function ItemSizeStock({ stock, setSize }) {
    const stockAvalilable = (currentStock) => {
        if (currentStock >= 1) return true
    }

    return (
        <div className='size-selector'>
            <button onClick={(e) => setSize(e.target.value)} className={stockAvalilable(stock.s) ? "available" : "outofstock"} disabled={!stockAvalilable(stock.s)} value={"S"}>S</button>
            <button onClick={(e) => setSize(e.target.value)} className={stockAvalilable(stock.m) ? "available" : "outofstock"} disabled={!stockAvalilable(stock.m)} value={"M"}>M</button>
            <button onClick={(e) => setSize(e.target.value)} className={stockAvalilable(stock.l) ? "available" : "outofstock"} disabled={!stockAvalilable(stock.l)} value={"L"}>L</button>
            <button onClick={(e) => setSize(e.target.value)} className={stockAvalilable(stock.xl) ? "available" : "outofstock"} disabled={!stockAvalilable(stock.xl)} value={"XL"}>XL</button>
        </div>
    )
}
Item.propTypes = {
    prod: PropTypes.object,
}