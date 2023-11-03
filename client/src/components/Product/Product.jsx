import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
export default function Product({ prod, className }) {
    const server = import.meta.env.PROD ? "https://casafutbol-production.up.railway.app" : " http://localhost:3001"
    const peso = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
    })
    return (
        <div className={className} >
            <Link to={"/item/" + prod._id}>
                <div className=''>
                    <img src={`${server}` + prod.path} className='product-image' />
                </div>
            </Link>
            <div className='product-card-description'>
                <p className='product-card-title'>{prod.title}</p>
                <p className='product-price'>{peso.format(prod.price)}</p>
                <p className='product-card-category'>{prod.category}</p>
            </div>
        </div>
    )
}

Product.propTypes = {
    prod: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired,
}
