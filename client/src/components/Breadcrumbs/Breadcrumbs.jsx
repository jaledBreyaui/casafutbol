import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Breadcrumbs.css"
import { useEffect, useState } from "react";

export default function Breadcrumbs({ item }) {
    const [location, setlocation] = useState(" ")
    const params = useParams()
    const string = item.title

    function capitalizarPrimeraLetra(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    useEffect(() => {
        if (params) {
            setlocation(params.team || params.category || params.search)
        }
        console.log(item)
    }, [params])

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
                location ? <div>
                    <i className="pi pi-angle-right" style={{ color: "black" }}></i>
                    <Link to={"/products/search/" + location}>{capitalizarPrimeraLetra(location)} </Link>
                </div>
                    :
                    <div>
                        <i className="pi pi-angle-right" style={{ color: "black" }}></i>
                        <Link to={"/products/" + item.category} >{capitalizarPrimeraLetra(item.category)} </Link>
                        {item.title ? <i className="pi pi-angle-right" style={{ color: "black" }}></i> : <></>}
                    </div>
            }

            {
                item.title !== "no" ? <div className="lastcrumb-div">

                    <Link className="lastcrumb">{capitalizarPrimeraLetra(string)} </Link>
                </div>
                    :
                    <></>
            }
        </div>
    )
}
