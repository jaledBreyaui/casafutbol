import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Product from "../Product/Product.jsx"
import { useFilters } from "../../hooks/useFilters";
import { useLocation } from "react-router-dom";
import { ProgressSpinner } from 'primereact/progressspinner';


export default function ProductList({ className, category }) {
    const { products: allProducts, loading } = useContext(ProductsContext)
    const { setFilters, filterProducts, searchFilter } = useFilters();
    const location = useLocation()
    const filter = () => {
        if (category.split(" ").length === 1) {
            setFilters(({
                team: category,
                category: "all"
            }))
        } else {
            setFilters(({
                team: "all",
                category: category
            }))
        }
    }
    const searchOrFilters = () => {
        if (location.pathname.includes("search")) {
            return searchFilter(allProducts, category)
        } else {
            return filterProducts(allProducts)
        }
    }

    useEffect(() => {
        filter()
        console.log(searchOrFilters())
    }, [category])


    return (
        <>
            <div className={loading ? "product-list-loader" : "product-list-container"}>
                {loading && <ProgressSpinner />}
                {searchOrFilters().length > 1 ? searchOrFilters().map((prod, i) => {
                    return <Product key={i} prod={prod} className={className} />
                }) : <></>
                }
                {
                    (searchOrFilters().length === 0 && loading === false) &&
                    <h2 className="empty-search">No se encontraron resultados para {category}</h2>
                }
            </div>
        </>
    )
}



// CARRITO // DATOS AL MAIL