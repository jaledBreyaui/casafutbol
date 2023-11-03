// import React from 'react';
import "./Menu.css"
import { Menubar } from 'primereact/menubar';
import SearchBar from '../SearchBar/SearchBar'
import { Link } from "react-router-dom";
import logo from '/imgs/logopng.png'
import CartIcon from "../CartIcon/CartIcon";

export default function BasicDemo() {
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
            label: "Guía de talles",
            url: "/guiadetalles"
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