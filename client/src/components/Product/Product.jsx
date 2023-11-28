
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
export default function Product({ prod, className }) {
    const server = import.meta.env.PROD ? "https://casafutbol-production.up.railway.app" : " http://localhost:3001"
    const peso = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
    })

    const handleOutOfStock = () => {
        if (prod.stock.s === 0 && prod.stock.m === 0 && prod.stock.l === 0 && prod.stock.xl === 0) {
            return true
        }
    }



    return (
        <div className={handleOutOfStock() ? className + " outofstock" : className} >
            <Link to={"/item/" + prod._id} >
                <div className=''>
                    <LazyLoadImage
                        alt={`${prod.title}`}
                        src={`${server}` + prod.path}
                        className='product-image'
                        effect='opacity'

                    />
                    <img />

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
