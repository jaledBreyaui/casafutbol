import ProductList from "../ProductList/ProductList"
import SideMenu from "../SideMenu/SideMenu"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Pagination from "../Pagination/Pagination";
import { useFilters } from "../../hooks/useFilters";
import { Helmet } from "react-helmet"

function ProductListContainer() {
    const server = import.meta.env.PROD ? "https://casafutbol-production.up.railway.app" : " http://localhost:3001"
    const { category } = useParams()
    const { team } = useParams()
    const { search } = useParams()
    const [products, setProducts] = useState([])
    const [productsLength, setProductsLength] = useState()
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [size, setSize] = useState()
    const { searchFilter } = useFilters()

    const [breadcrumb, setBreadcrumb] = useState({
        title: "no",
        generalCategory: "Camisetas",
        category: ""
    })
    let title = category || team || (search ? `Resultados para ${search}` : "Camisetas")
    useEffect(() => {
        setBreadcrumb({
            title: "no",
            generalCat: "Camisetas",
            category: category ? category : "no"
        })
    }, [category, search])

    const fetchProducts = async () => {
        setLoading(true)
        try {
            if (category === undefined && team === undefined) {
                const response = await fetch(`${server}/products/?page=${currentPage}&size=${size ? size.toLowerCase() : ""}`)
                if (!response.ok) {
                    throw new Error('Could not fetch products')
                }
                const data = await response.json()
                setProducts(data.prod)
                setProductsLength(data.totalItems)
            }
            if (category) {
                const response = await fetch(`${server}/products-category/${category.toUpperCase()}/?page=${currentPage}&size=${size ? size.toLowerCase() : ""}`)
                if (!response.ok) {
                    throw new Error('Could not fetch products')
                }
                const data = await response.json()
                setProducts(data.prod)
                setProductsLength(data.totalItems)
            }
            if (team) {
                const response = await fetch(`${server}/products-team/${team.toUpperCase()}/?page=${currentPage}&size=${size ? size.toLowerCase() : ""}`)
                if (!response.ok) {
                    throw new Error('Could not fetch products')
                }
                const data = await response.json()
                setProducts(data.prod)
                setProductsLength(data.totalItems)
            }
            if (search) {
                const response = await fetch(`${server}/products`)
                if (!response.ok) {
                    throw new Error('Could not fetch products')
                }
                const data = await response.json()
                setProducts(searchFilter(data, search))
                setProductsLength(searchFilter(data, search).lenght)
            }
        } catch (error) {
            return error
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [currentPage, search, setProducts, category, team, setSize, size])

    useEffect(() => {
        setCurrentPage(1)
    }, [setSize, size])


    return (
        <div className="product-list-container-wrapper">
            <Helmet>
                <title>{title} | Casa Futbol</title>
                <meta name="description" content={"Compra a través de nuestra tienda camisetas de " + title + "al mejor precio"}></meta>

            </Helmet>
            <Breadcrumbs item={breadcrumb} />
            <SideMenu setSize={setSize} size={size} />
            <ProductList className={"product-list"} products={products} loading={loading} />
            <Pagination totalPages={Math.ceil(productsLength / 12)}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default ProductListContainer