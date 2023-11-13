import Category from "../Category/Category"
import PropTypes from 'prop-types';




export default function CategoryContainer({ categories }) {

    return (
        <div className="category-container">

            {categories.map((category, i) => {
                return <Category key={i} category={category} />
            })
            }
        </div>
    )
}

CategoryContainer.propTypes = {
    categories: PropTypes.array.isRequired
}