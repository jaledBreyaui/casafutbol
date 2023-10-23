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
            label: 'Clubes',
            url: "/products/search/CLUBES"
        },
        {
            label: 'Selecciones',
            url: "/products/search/SELECCIONES"
        },
        {
            label: "Retro",
            url: "/products/search/RETRO",
        },
        {
            label: "Actuales",
            url: "/products/search/ACTUAL",
        },
        {
            label: "Guía de talles"
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