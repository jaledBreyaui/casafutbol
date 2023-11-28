import "./MenuResponsive.css"
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import logo from '/imgs/logopng.png'
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon"
import SearchBar from "../SearchBar/SearchBar";
// import ModalWindow from "../ModalWindow/ModalWindow";
import ModalContainer from "../ModalContainer/ModalContainer";

export default function MenuResponsive() {

    const [visible, setVisible] = useState(false);
    const [showGuide, setShowGuide] = useState();
    const items = [
        {
            label: 'Camisetas',
            url: "/products"
        },
        {
            label: 'Selecciones',
            url: "/products/SELECCIONES"
        },
        {
            label: "Retro",
            url: "/products/RETRO",
        },
        {
            label: "Actuales",
            url: "/products/ACTUAL",
        }]

    return (
        <div className="">
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <div className="responsive-menu">
                    {items.map((item, i) => {
                        return <MenuItem key={i} label={item.label} link={item.url} setVisible={setVisible} />
                    })}
                    <ModalContainer
                        showGuide={showGuide}
                        setShowGuide={setShowGuide}
                        header={"Guía de Talles"}
                        content={<img src="/imgs/guiaDeTalles.jpg" className="talles-image" />}
                        icon={'pi pi-angle-down'}
                    />
                    <SearchBar className={"searchbar-resposive-menu"} setVisible={setVisible} />
                </div>
            </Sidebar>
            <div className="responsive-navbar">
                <button onClick={() => setVisible(true)}> <i className="pi pi-bars" style={{ color: 'white', fontSize: "1.8rem" }}></i></button>
                <Link to="/" ><img src={logo} alt="Logo de CasaFutbol" id="logo" /></Link>
                <CartIcon />
            </div>
        </div >
    )
}


function MenuItem({ label, link, setVisible }) {
    return (
        <Link to={link} onClick={() => setVisible(false)}>
            <span>{label}</span>
        </Link>
    )

}