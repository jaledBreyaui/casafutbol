import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';


export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const server = import.meta.env.PROD ? "https://casafutbol-production.up.railway.app" : " http://localhost:3001"
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${server}/products`)
            if (!response.ok) {
                console.log(response)
                throw new Error('Could not fetch products')
            }
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.log(error)
            return error
        }
        finally {
            setLoading(false)
        }
    };

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
    children: PropTypes.object.isRequired,
}
