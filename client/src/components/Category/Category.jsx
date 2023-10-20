import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import { useState } from 'react';


export default function Category({ category }) {
    const [mouse, setMouse] = useState(true)

    return (
        <div
            onMouseEnter={() => setMouse(false)}
            onMouseLeave={() => setMouse(true)}
            className='' >
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