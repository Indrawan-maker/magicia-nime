const Pagination = ({ page, lastPage, setPage }) => {


    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }
    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            {page <= 1 ? null :
                <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">Prev</button>
            }
            <p className="gap-4"> {page} 0f 1000{lastPage}</p>
            {/* di atas di api jikanya ga ada, bagian last page jadi manual */}
            {page >= 1000 ? null :
            <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
            }
        </div>
    )
}




export default Pagination