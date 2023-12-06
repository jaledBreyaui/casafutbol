
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';


export default function SideMenu({ setSize }) {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const categories = ["S", "M", "L", "XL"]
    return (
        <div className="side-menu-container">
            <Sidebar visible={visibleLeft} position="right" onHide={() => setVisibleLeft(false)}  >
                <p className='category-selector-title'>
                    <span>
                        Filtrar por talle
                    </span>
                </p>
                <CategorySelector categories={categories} header="Categorías" setSize={setSize} />
            </Sidebar>
            <button className='filters-button' onClick={() => setVisibleLeft(true)}>
                <span>Filtrar</span> <i className="pi pi-sliders-h" style={{ fontSize: '16px', color: "#000" }}></i>
            </button>
        </div >
    )
}

function CategorySelector({ categories, setSize }) {
    return (
        <div className='category-selector'>
            <div className='category-selector-radio'>
                {
                    categories.map((cat, i) => {
                        return (<label key={i}>
                            <button className='button-category' value={cat} name={categories} onClick={() => setSize(cat)}>
                                {cat}
                            </button>
                        </label>)
                    })
                }
            </div>
            <button className='reset-filters-btn' onClick={() => setSize('')}>Reestablecer filtros</button>
        </div>
    )
}
