import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Item from "../Item/Item.jsx"
import { useParams } from "react-router-dom";
import ItemSliderContainer from "../ItemSliderContainer/ItemSliderContainer";


export default function ItemDetail() {
    const { products } = useContext(ProductsContext)
    const { id } = useParams()

    const product = products.filter((prod) => {
        return prod._id === id
    })


    const sameTeamProducts = products.filter((prod) => {
        return (
            product[0].team == prod.team
        )
    })

    const relatedProducts = products.filter((prod) => {
        return (
            product[0].category == prod.category
        )
    })




    return (
        <div className="item-detail-container">
            <Item prod={product[0]} />
            <ItemSliderContainer sectionName={"También te puede interesar..."} products={sameTeamProducts.concat(relatedProducts.slice(0, 10))} />
        </div>
    )
}


