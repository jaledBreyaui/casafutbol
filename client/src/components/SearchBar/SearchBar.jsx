import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Searchbar.css"
export default function SearchBar() {
    const ref = useRef()
    const navigate = useNavigate()
    const [search, setSearch] = useState()
    const [expand, setExpand] = useState(false);

    const handleInput = (e) => {
        let inputText = e.target.value;
        setSearch(inputText)
    }
    const handleClick = () => {
        if (search.length > 1) {
            navigate(`/products/search/${search.toUpperCase()}`)
            setSearch('')
        }
    }

    const handleHide = (e) => {
        if (!ref.current.contains(e.target)) {
            setExpand(false)
        }
    }
    useEffect(() => {

        document.addEventListener('click', handleHide);
        return () => {
            document.removeEventListener('click', handleHide);
        };

    }, [ref])

    return (
        <div className="searchbar" ref={ref} onMouseOver={() => setExpand(true)}>
            <i onClick={handleClick}
                className="pi pi-search"
                style={{ fontSize: '1.5rem', color: "#FFF" }} ></i>
            <input
                className={expand ? "search-input search-expanded" : "search-input"}
                placeholder="Buscar" onChange={handleInput} value={search} />
        </div>
    )
}