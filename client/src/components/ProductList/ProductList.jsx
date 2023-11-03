// import { useContext, useEffect } from "react";
// import { ProductsContext } from "../../context/ProductsContext";
import Product from "../Product/Product.jsx"
// import { useFilters } from "../../hooks/useFilters";
// import { useLocation } from "react-router-dom";
import { ProgressSpinner } from 'primereact/progressspinner';


export default function ProductList({ className, products, loading }) {

    // const { products: allProducts, loading } = useContext(ProductsContext)
    // const { setFilters, filterProducts, searchFilter } = useFilters();
    // const location = useLocation()
    // const filter = () => {
    //     if (category.split(" ").length === 1) {
    //         setFilters(({
    //             team: category,
    //             category: "all"
    //         }))
    //     } else {
    //         setFilters(({
    //             team: "all",
    //             category: category
    //         }))
    //     }
    // }


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



// CARRITO // DATOS AL MAIL