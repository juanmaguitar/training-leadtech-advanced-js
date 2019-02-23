import {Pagination} from 'react-bootstrap'
import React from 'react'

export const getPaginationBar = (actualPage, totalPages, onClick) => {
  
  const middlePagination = (actualPage, totalPages, onClick) => (
    getPageNumbers(actualPage, totalPages).map( 
      (page, index) => getPaginationElements(index, page, actualPage, onClick)
    )
  )

  return (
    <Pagination>
    <Pagination.First key='first' name={1} disabled={actualPage === 1} onClick={onClick}/>
    {middlePagination(actualPage, totalPages, onClick)}
    <Pagination.Last key='last' name={totalPages} disabled={actualPage === totalPages} onClick={onClick}/>
    </Pagination>
  )
}

const getPageNumbers = (actualPage, totalPages) => {
  const numberPages = actualPage > 20 ? 20 : 5
  const firstPagesRow = [1, 2, 3, 4, 5]
  const lastPagesRow = [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
  if (totalPages < 10) {
    let pages = []
    for ( let i = 1; i <= totalPages; i++) { pages.push(i) }
    return pages
  } else if (firstPagesRow.includes(actualPage)) {
    return [...firstPagesRow, 6, 7, 0, actualPage + numberPages]
  } else if (lastPagesRow.includes(actualPage)) {
    return [actualPage - numberPages, 0, totalPages - 6, totalPages - 5, ...lastPagesRow]
  } else {
    return [actualPage - numberPages, 0, actualPage - 2, actualPage - 1, actualPage, actualPage + 1, actualPage + 2, 0, actualPage + numberPages]
  }
}

const getPaginationElements = (key, page, actualPage, onClick) => {
  if (page === 0) {
    return (<Pagination.Ellipsis key={key}/>)
  } else {
    return (<Pagination.Item 
      key={key} 
      name={page} 
      active={page === actualPage}
      onClick={page !== actualPage ? onClick : undefined}>
        {page}
      </Pagination.Item>
    )
  }
}

export const capitalizeString = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
