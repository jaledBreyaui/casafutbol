import "./InfoContainer.css"
import { useWidth } from "../../hooks/useWidth";
import Slider from "react-slick";

export default function InfoContainer() {
    const { width } = useWidth()
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        swipeToSlide: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 2000,
        cssEase: "linear",
        className: "info-slider",
        arrows: false,
        dragable: true,

    };
    return (
        <>
            {
                width > 1000 ?
                    <div className="info-container">
                        <Info icon={'pi pi-instagram'} text={'Compra a través Instagram'} />
                        <Info icon={'pi pi-truck'} text={'Envíos gratis a todo el país'} />
                        <Info icon={'pi pi-credit-card'} text={'MercadoPago o Transferencia'} />
                    </div> :
                    <Slider {...settings}>
                        <Info icon={'pi pi-instagram'} text={'Compra a través Instagram'} />
                        <Info icon={'pi pi-truck'} text={'Envíos gratis a todo el país'} />
                        <Info icon={'pi pi-credit-card'} text={'MercadoPago o Transferencia'} />
                    </Slider>
            }
        </>
    )
}

function Info({ icon, text }) {
    return (
        <div className="info">
            <i className={icon} ></i>
            <p>
                <span>
                    {text}
                </span>
            </p>
        </div>
    )
}