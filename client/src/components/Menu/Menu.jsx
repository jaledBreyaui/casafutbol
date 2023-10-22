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
            items: [
                {
                    label: 'Retro',
                    url: "https://somoscasafutbol.com/products/search/RETRO/",
                    items: [
                        {
                            label: 'Equipos',
                            url: "/products/search/CLUBES RETRO/"

                        },
                        {
                            label: 'Selecciones',
                            url: "/products/search/SELECCIONES RETRO/"
                        },
                    ]
                },
                {
                    label: 'Actuales',
                    url: "/products/search/ACTUAL",
                    items: [
                        {
                            label: 'Clubes',
                            url: "/products/search/CLUBES ACTUAL"

                        }
                    ]
                }
            ]
        },
        {
            label: 'Retro',
            items: [
                {
                    label: 'Clubes',
                    url: "/products/search/CLUBES RETRO"
                },
                {
                    label: 'Selecciones',
                    url: "/products/search/SELECCIONES RETRO"
                }
            ]
        },
        {
            label: 'Actuales',
            items: [
                {
                    label: 'Equipos',
                    url: "/products/search/CLUBES ACTUAL"
                }
            ]
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