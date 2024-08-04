import React from 'react'

function CardFilter({ filterChange }) {
  return (
    <div className='filter'>
        <a className='icon' href='#' data-bs-toggle="dropdown">
            <i className='bi bi-three-dots'></i>
        </a>
        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow'>
            <li className='dropdown-header text-start'>
                <h6>Filter</h6>
            </li>
            <li>
                <a className='dropdown-item' onClick={() => filterChange('วันนี้')}>
                    วันนี้
                </a>
            </li>
            <li>
                <a 
                className='dropdown-item' 
                onClick={() => filterChange('เดือนนี้')}
                >
                    เดือนนี้
                </a>
            </li>
            <li>
                <a 
                className='dropdown-item' 
                onClick={() => filterChange('ปีนี้')}
                >
                    ปีนี้
                </a>
            </li>
        </ul>
    </div>
  )
}

export default CardFilter