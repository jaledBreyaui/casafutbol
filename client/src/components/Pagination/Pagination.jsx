import "./Pagination.css"


export default function Pagination({ totalPages, setCurrentPage, currentPage }) {
    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div className="pagination">
            <button onClick={prevPage} className="next-page">
                <i className="pi pi-angle-left"></i>
            </button>
            {
                (
                    () => {
                        let pages = []

                        for (let i = 1; i <= totalPages; i++) {
                            pages.push(<PaginationButton
                                key={i}
                                pageNumber={i}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage} />)
                        }
                        return pages
                    }
                )()
            }
            <button onClick={nextPage} className="next-page">
                <i className="pi pi-angle-right"></i>
            </button>
        </div>
    )
}

function PaginationButton({ pageNumber, setCurrentPage, currentPage }) {
    return (
        <>
            <button
                onClick={() => setCurrentPage(pageNumber)}
                className={currentPage === pageNumber ? "page-active" : ""}
            >
                {pageNumber}
            </button>
        </>
    )
}
