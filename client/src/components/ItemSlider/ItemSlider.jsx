import { Component } from "react";
import Slider from "react-slick";
import Product from "../Product/Product";



export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            slidesToShow: 6,
            swipeToSlide: true,
            slidesToScroll: 5,
            autoplay: false,
            speed: 700,
            autoplaySpeed: 4000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        };
        return (
            <section className="carousel-section">
                <h2 className="carousel-section-title">{this.props.section}</h2>
                <div className="separator"></div>
                <div className="item-slider">
                    <Slider {...settings}>
                        {
                            this.props.products.map((product, i) => {
                                return <Product key={i} prod={product} className="product-card" />

                            }
                            )
                        }
                    </Slider>
                </div>
            </section>
        );
    }
}