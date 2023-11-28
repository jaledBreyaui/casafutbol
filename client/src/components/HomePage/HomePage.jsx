// import ProductList from "../ProductList/ProductList"

import { ProductsContext } from "../../context/ProductsContext";
import { useContext } from "react";
import ItemSliderContainer from "../ItemSliderContainer/ItemSliderContainer";
import { Link } from "react-router-dom";
import CategoryContainer from "../CategoryContainer/CategoryContainer";
import InfoContainer from "../InfoContainer/InfoContainer";
import "./HomePage.css"
import { Helmet } from "react-helmet";

export default function HomePage() {
    const categories = [
        {
            title: "Selección Argentina",
            src: "/imgs/seleccion.jpg",
            srcAlt: "/imgs/seleccionalt.jpg",
            link: ["team/ARGENTINA"]
        },
        {
            title: 'Selecciones Retro',
            src: '/imgs/brasilgrupal.jpg',
            srcAlt: "/imgs/alemaniagrupal.jpg",
            link: ["Selecciones Retro"]
        },
        {
            title: 'Clubes Retro',
            src: '/imgs/IMG_3385.jpg',
            srcAlt: "/imgs/liverpoolgrupal.jpg",
            link: ["Clubes Retro "]
        },
        {
            title: "Boca Juniors",
            src: "/imgs/bocagrupal.jpg",
            srcAlt: "/imgs/bocagrupalalt.jpg",
            link: ["team/BOCA"]
        },
        {
            title: 'River Plate',
            src: '/imgs/rpgrupal.jpeg',
            srcAlt: '/imgs/rpgrupal.jpeg',
            link: ["team/RIVER"]
        }]
    const artRecomendados = ["CAMISETA TITULAR BAYERN MUNICH 1995-1997", "CAMISETA TITULAR ARSENAL 2005-2006", "CAMISETA TITULAR MANCHESTER UNITED 1998-1999",
        "CAMISETA TERCERA EQUIPACION MILAN 2012-2014", "CAMISETA TITULAR HOLANDA 1998", "CAMISETA TITULAR BARCELONA 2007-2008", "CAMISETA TITULAR BARCELONA EDICION 100 AÑOS"
        , "CAMISETA TITULAR BARCELONA 1998-1999", "CAMISETA SUPLENTE BARCELONA 1996-1997"]

    const { products: allProducts } = useContext(ProductsContext)

    const recomendados = allProducts.filter((prod) => {
        return artRecomendados.includes(prod.title)
    })

    return (
        <main className="homepage">
            <Helmet>
                <title>Inicio | Casa Futbol</title>
                <meta name="description" content="Comprá las mejores camisetas tanto actuales como retro a través de nuestra tienda online.
                    Somos Casa Futbol tenemos gran variedad en camisetas de futbol. Explorá nuestras categorías Actuales Retro Selecciones Boca River Argentina"></meta>
            </Helmet>
            <section className="homepage-header">
                <div className="homepage-image"></div>
                <div className="homepage-text">
                    <p className="header-title">Conocé Todos Nuestros Productos</p>
                    <Link to="/products">
                        <button className="header-button" >Visitá nuestro catálogo</button>
                    </Link>
                </div>
            </section>
            <InfoContainer />
            <p className="category-section-title">Explorá nuestras categorías</p>
            <CategoryContainer categories={categories} />
            <ItemSliderContainer sectionName={"Recomendaciones"} products={recomendados} />
        </main >
    );
}