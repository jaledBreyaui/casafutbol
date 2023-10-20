import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';


export const ProductsContext = createContext();

export function ProductsProvider({ children }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:3001/products')
            if (!response.ok) {
                console.log(response)
                throw new Error('Could not fetch products')
            }
            const data = await response.json()
            setProducts(addPrice(data))

            localStorage.setItem("productosLocal", JSON.stringify(products))
        } catch (error) {
            console.log(error)
            return error
        }
        finally {
            setLoading(false)
        }
    };
    const addPrice = (products) => {
        let productsWithPrice = products.map((prod) => {
            let price = 0;
            if (prod.category.includes("Retro")) { price = 26000; }
            if (prod.category.includes("Actual")) { price = 23000; }
            if (prod.tags.includes("LARGA")) { price = 28000; }
            if (prod.tags.includes("ESTAMPADA")) { price = 27000; }
            prod.price = price;
            return prod
        })
        return productsWithPrice
    }
    useEffect(() => {
        fetchProducts();
    }, [])



    return (
        <ProductsContext.Provider value={{
            products,
            loading
        }}>
            {children}
        </ProductsContext.Provider>
    );
}


// export function useAPI() {
//     const context = useContext(ProductsContext);
//     if (context === undefined) {
//         throw new Error("Context must be used within a Provider");
//     }
//     return context;
// }

ProductsProvider.propTypes = {
    children: PropTypes.array.isRequired,
}
