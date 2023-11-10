// import React from 'react';
import "./Menu.css"
import { Menubar } from 'primereact/menubar';
import SearchBar from '../SearchBar/SearchBar'
import { Link } from "react-router-dom";
import logo from '/imgs/logopng.png'
import CartIcon from "../CartIcon/CartIcon";
import { useState } from "react";
import ModalContainer from "../ModalContainer/ModalContainer";



export default function BasicDemo() {
    const [showGuide, setShowGuide] = useState(false);
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
        },
        {
            label: <ModalContainer
                showGuide={showGuide}
                setShowGuide={setShowGuide}
                header={"Guía de Talles"}
                content={<img src="/imgs/guiaDeTalles.jpg" className="talles-image" />}
                icon={'pi pi-angle-down'}
            />,
        },
        {
            label: < SearchBar />
        }
    ];

    return (
        <div className="">
            <Menubar model={items}
                start={<Link to="/"> <img src={logo} alt="" id="logo" /> </Link>}
                end={<CartIcon />}
            />
        </div>

    )
}