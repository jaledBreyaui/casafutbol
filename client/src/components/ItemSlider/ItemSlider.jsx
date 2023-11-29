import { Component } from "react";
import Slider from "react-slick";
import Product from "../Product/Product";



export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            slidesToShow: 6,
            slidesToScroll: 6,
            initialSlide: 1,
            autoplay: false,
            speed: 700,
            loop: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        initialSlide: 1,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false,
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