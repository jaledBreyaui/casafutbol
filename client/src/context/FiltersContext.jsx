import { createContext, useState } from 'react'
import PropTypes from 'prop-types';


export const FiltersContext = createContext()

export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        team: "all"
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}

FiltersProvider.propTypes = {
    children: PropTypes.object.isRequired,
}