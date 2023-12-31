import PropTypes from 'prop-types';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Item.css"
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { ProgressSpinner } from 'primereact/progressspinner';
import ModalContainer from '../ModalContainer/ModalContainer';

export default function Item({ prod, loading }) {
    const server = import.meta.env.PROD ? "https://casafutbol-production.up.railway.app" : " http://localhost:3001"
    const { addItem } = useContext(CartContext)
    const [size, setSize] = useState()
    const [showGuide, setShowGuide] = useState()
    const [showMethods, setShowMethods] = useState()
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




    const peso = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
    })
    return (
        <div className='item'>
            {loading && <ProgressSpinner />}
            <Breadcrumbs item={breadcrumb} />
            <div className='item-image'>
                <img src={`${server}` + prod.path} alt={`${prod.title} image`} />
            </div>
            <div className='item-info'>
                <div>
                    <p className="product-title">{prod.title}</p>
                    <span className='item-info-price'>{peso.format(prod.price)}</span>
                    <ModalContainer
                        setShowGuide={setShowMethods}
                        showGuide={showMethods}
                        header={"Métodos de Pago"}
                        content={<p>-Transferencia bancaria</p>}
                        icon={"pi pi-credit-card"}
                    />
                </div>
                <div className='item-stock'>
                    <div className='item-stock-size'>
                        <p>Talle : <strong>{size}</strong></p>
                        <p>{size ? prod.stock[size.toLowerCase()] : ""} disponibes </p>
                    </div>
                    < ItemSizeStock stock={prod.stock} setSize={setSize} />
                    <ModalContainer
                        setShowGuide={setShowGuide}
                        showGuide={showGuide}
                        header={"Guía de talles"}
                        content={<img src="/imgs/guiaDeTalles.jpg" className="talles-image" />}
                        icon={'pi pi-angle-down'}
                    />
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
    prod: PropTypes.object.isRequired,
}