import Product from "../Product/Product.jsx"
import { ProgressSpinner } from 'primereact/progressspinner';
export default function ProductList({ className, products, loading }) {

    return (
        <>
            <div className={loading ? "product-list-loader" : "product-list-container"}>
                {loading && <ProgressSpinner />}
                {products.map((prod, i) => {
                    return <Product key={i} prod={prod} className={className} />
                })
                }

            </div>
        </>
    )
}


