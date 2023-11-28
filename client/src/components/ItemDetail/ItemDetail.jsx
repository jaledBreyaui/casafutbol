import { useState, useEffect } from "react";
import Item from "../Item/Item.jsx"
import { useParams } from "react-router-dom";
import ItemSliderContainer from "../ItemSliderContainer/ItemSliderContainer";
import { Helmet } from "react-helmet";

export default function ItemDetail() {
    const server = import.meta.env.PROD ? "https://casafutbol-production.up.railway.app" : " http://localhost:3001"

    const { id } = useParams()
    const [item, setItem] = useState({
    })
    const [relatedItems, setRelatedItems] = useState([])
    const [loading, setLoading] = useState()

    const fetchRelated = async (category, team) => {
        try {
            const sameCategory = await fetch(`${server}/products-category/${category.toUpperCase()}/?page=1`)
            const sameTeam = await fetch(`${server}/products-team/${team.toUpperCase()}/?page=1`)
            if (!sameCategory.ok && !sameTeam.ok) {
                throw new Error('Could not fetch products')
            }
            const data = await sameCategory.json()
            const data1 = await sameTeam.json()
            const sameTeamFiltered = data1.prod.filter((prod) => {
                return prod._id !== id
            })
            setRelatedItems(sameTeamFiltered.concat(data.prod))
        } catch (error) {
            return error
        }
    }

    const fetchItem = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${server}/products/${id}`)
            if (!response.ok) {
                throw new Error('Could not fetch products')
            }
            const data = await response.json()
            fetchRelated(data[0].category, data[0].team)
            setItem(data[0])
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchItem()
    }, [id])

    return (
        <div className="item-detail-container">
            {
                item.title ? <>
                    <Helmet>
                        <title>{item.title}</title>
                        <meta name="description" content={item.title}></meta>
                    </Helmet>
                    <Item prod={item} loading={loading} />
                    <ItemSliderContainer sectionName={"También te puede interesar..."} products={relatedItems} />
                </>
                    :
                    <></>
            }

        </div>
    )
}


