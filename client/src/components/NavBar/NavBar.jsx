import Menu from "../Menu/Menu";
import MenuResponsive from "../MenuResponsive/MenuResponsive";
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css"
import { useWidth } from "../../hooks/useWidth";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false)
    const { width } = useWidth()
    const location = useLocation()
    const changeBackground = () => {
        if (location.pathname !== "/") {
            setNavbar(true)
        } else {
            if (window.scrollY >= 1) {
                setNavbar(true)
            } else {
                setNavbar(false)
            }
        }
    }
    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)

        return () => {
            window.removeEventListener("scroll", changeBackground)
        }

    })

    return (
        <nav className={navbar ? 'navbar active' : 'navbar inactive'}>
            {navbar ?
                <div className="navbar-detail"><p>ENVÍO GRATIS</p></div>
                :
                <div></div>}
            <div className="navbar-bottom">
                {width > 1000 ? <Menu /> : <MenuResponsive />}
            </div>
        </nav>
    )
}
