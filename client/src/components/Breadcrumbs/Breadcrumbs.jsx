import { Link } from "react-router-dom";
import "./Breadcrumbs.css"

export default function Breadcrumbs({ item }) {
    const string = item.title

    function capitalizarPrimeraLetra(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }


    return (
        <div className={item.title == "no" ? "breadcrumb breadcrumb-category" : "breadcrumb breadcrumb-item"}>
            <div>
                <Link to="/">Inicio</Link>
                <i className="pi pi-angle-right" style={{ color: "black" }}></i>
            </div>
            <div>
                <Link to="/products">{item.generalCat} </Link>
            </div>

            {
                item.category !== "no" ? <div>
                    <i className="pi pi-angle-right" style={{ color: "black" }}></i>
                    <Link to={"/products/search/" + item.category.toUpperCase()}>{capitalizarPrimeraLetra(item.category)} </Link>
                </div>
                    :
                    <></>
            }

            {
                item.title !== "no" ? <div>
                    <i className="pi pi-angle-right" style={{ color: "black" }}></i>
                    <Link>{capitalizarPrimeraLetra(string)} </Link>
                </div>
                    :
                    <></>
            }
        </div>
    )
}
