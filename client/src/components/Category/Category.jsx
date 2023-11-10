import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import "./Category.css"
import { useWidth } from "../../hooks/useWidth";


export default function Category({ category }) {
    const [mouse, setMouse] = useState(true)
    const { width } = useWidth()
    useEffect(() => {
        if (width < 800) setMouse(false)
    }, [])
    return (
        <div
            onMouseEnter={() => width > 800 ? setMouse(false) : ""}
            onMouseLeave={() => width > 800 ? setMouse(true) : ""}
            className='category' >
            <Link className='category-title-container' to={"/products/" + category.link}>
                <div className='category-image' style={{
                    backgroundImage: `url(${mouse ? category.src : category.srcAlt})`
                }}>
                    <p className='category-title' style={{
                        opacity: `${mouse ? 0 : 1}`
                    }} >
                        {category.title}
                    </p>
                </div>
            </Link>
        </div>
    )
}

Category.propTypes = {
    category: PropTypes.object.isRequired,
}