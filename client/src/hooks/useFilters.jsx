import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersContext'

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext)
    const filterProducts = (products) => {
        if (filters.category === "all" && filters.team === "all") { return products }
        return products.filter(product => {
            return (
                (filters.team === "all" || product.team == filters.team) &&
                (
                    filters.category === 'all'
                    ||
                    product.category == filters.category
                )
            )
        })
    }
    const searchFilter = (products, searchValue) => {
        return products.filter(product => {
            return (
                (product.team.includes(searchValue)) ||
                (product.tags.includes(searchValue)) ||
                (product.category.toUpperCase().includes(searchValue)) ||
                (product.title.includes(searchValue))
            )
        })
    }

    return { filters, filterProducts, setFilters, searchFilter }
}
