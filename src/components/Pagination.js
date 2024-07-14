import React from 'react';

const Pagination = ({ elementsPerPage, totalElements, currentPage, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
        pageNumbers.push(i);
    }



    return (
        <div className='mt-4 w-full flex justify-center join'>
            {
            pageNumbers.map((pageNumber) => (
                <button key={pageNumber} onClick={() => paginate(pageNumber)} className={pageNumber === currentPage ? 'join-item btn btn-active' : 'join-item btn'}>
                    {pageNumber}
                </button>
            ))}
        </div>
    );
};

export default Pagination;