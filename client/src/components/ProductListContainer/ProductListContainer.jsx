import ProductList from "../ProductList/ProductList"
import SideMenu from "../SideMenu/SideMenu"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

function ProductListContainer() {
    const { category } = useParams()
    // function capitalizarPrimeraLetra(str) {
    //     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    // }
    const [breadcrumb, setBreadcrumb] = useState({
        title: "no",
        generalCategory: "Camisetas",
        category: ""
    })
    console.log(category)
    useEffect(() => {
        setBreadcrumb({
            title: "no",
            generalCat: "Camisetas",
            category: category ? category : "no"
        })
    }, [category])
    return (
        <div className="product-list-container-wrapper">
            <Breadcrumbs item={breadcrumb} />
            <SideMenu />
            <ProductList className={"product-list"} category={category ? category : "all"} />
        </div>
    )
}

export default ProductListContainer