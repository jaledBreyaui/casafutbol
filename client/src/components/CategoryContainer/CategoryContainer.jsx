import Category from "../Category/Category"
import PropTypes from 'prop-types';
import { useWidth } from "../../hooks/useWidth";
import Slider from "react-slick";


export default function CategoryContainer({ categories }) {
    const { width } = useWidth()
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1.5,
        swipeToSlide: true,
        slidesToScroll: 1,
        autoplay: false,
        speed: 800,


        arrows: true,
        dragable: true,

    };
    return (
        <div className="category-container">
            {width > 1200 ? categories.map((category, i) => {
                return <Category key={i} category={category} />
            })
                :
                <Slider {...settings}>
                    {
                        categories.map((category, i) => {
                            return <Category key={i} category={category} />
                        })
                    }
                </Slider>
            }
        </div>
    )
}

CategoryContainer.propTypes = {
    categories: PropTypes.array.isRequired
}