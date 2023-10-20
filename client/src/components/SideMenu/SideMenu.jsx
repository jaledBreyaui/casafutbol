// pi-sliders-h
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
// import { ProductsContext } from "../../context/ProductsContext";

export default function SideMenu() {
    const [visibleLeft, setVisibleLeft] = useState(false);
    // const allProducts = useContext(ProductsContext);
    // Manga larga corta estampada  producto agotado ¿¿filtrar por talles?? y que aparezcan arriba las fotos buenas//
    const categories = ["Camisetas", "Retro", "Actuales", "Selecciones", "Titular", "Suplente", "Tercera Equipación"]
    return (
        <div className="side-menu-container">
            <Sidebar visible={visibleLeft} position="right" onHide={() => setVisibleLeft(false)}  >
                <p className='category-selector-title'>
                    <span>
                        Categorías
                    </span>
                </p>
                <CategorySelector categories={categories} header="Categorías" />
            </Sidebar>
            <button className='filters-button' onClick={() => setVisibleLeft(true)}>
                <span>Filtrar</span> <i className="pi pi-sliders-h" style={{ fontSize: '16px', color: "#000" }}></i>
            </button>
            <h2>Econtra tu Próxima Camiseta Aca!</h2>
        </div >
    )
}

function CategorySelector({ categories }) {
    return (
        <div className='category-selector'>
            <div className='category-selector-radio'>
                {
                    categories.map((cat, i) => {

                        return (<label key={i}>
                            <button className='button-category' value={cat} name={categories}>
                                {cat}
                            </button>
                        </label>)
                    })
                }
            </div>
        </div>
    )
}
