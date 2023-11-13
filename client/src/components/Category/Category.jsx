import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import { useState } from 'react';
import "./Category.css"
import { useWidth } from "../../hooks/useWidth";


export default function Category({ category }) {
    // const [mouse, setMouse] = useState(true)
    const { width } = useWidth()
    return (
        <>

            {width > 1200 ? <CategoryDesktop category={category} /> : <CategoryMobile category={category} />}
        </>
    )
}


function CategoryDesktop({ category }) {
    const [mouse, setMouse] = useState(true)
    return (
        <div
            onMouseEnter={() => setMouse(false)}
            onMouseLeave={() => setMouse(true)}
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

function CategoryMobile({ category }) {
    return (
        <>

            <div className='category' >
                <Link className='category-title-container' to={"/products/" + category.link}>
                    <p className='category-title'  >
                        {category.title}
                    </p>
                    <span>ver más</span>

                </Link >
            </div >

        </>
    )
}

Category.propTypes = {
    category: PropTypes.object.isRequired,
}