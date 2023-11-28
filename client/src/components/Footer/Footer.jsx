import "./Footer.css"
import logo from '/imgs/logopng.png'

export default function Footer() {
    return (
        <section className="footer">
            <div className="footer-top">
                {/* <div className="institucional">
                    <h4>
                        Navegación
                    </h4>
                    <ul className="institucional-list">
                        <li>
                            <a href="/talles">
                                Guía de Talles
                            </a>
                        </li>
                    </ul>
                </div> */}
                <div className="footerlogo-container">
                    <img src={logo} alt="Logo de CasaFutbol" className="footer-logo" />
                </div>
                <div className="socials-container" >
                    <h4>Seguinos en Nuestras Redes</h4>
                    <div className="socials">
                        <a href="https://www.instagram.com/casafutbolarg/" target="blank">
                            <span className="pi pi-instagram" style={{ fontSize: '1.8rem' }}></span>
                        </a>
                        <a href="">
                            <span className="material-symbols-outlined">
                                music_note
                            </span>
                        </a>

                    </div>
                </div>
                <div className="copy-container">
                    <p>&copy; 2023 Casa Futbol</p>

                </div>
            </div>
        </section>
    )
}

//TIKTOK INSTAGRAM LAS REDES

// WPP VENTAS CONCRETADAS NOMAS