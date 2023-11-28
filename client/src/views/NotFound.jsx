import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
export default function NotFound() {
    return (
        <div className="not-found">
            <Helmet>
                <title> Error 404 | Casa Futbol</title>
            </Helmet>
            <p className="not-found-header">Error 404</p>
            <Link to="/" className="not-found-link">volver al inicio</Link>

        </div>
    )
}
