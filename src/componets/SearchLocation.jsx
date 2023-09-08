import React from 'react'
import search from '../images/search.svg'

export default function SearchLocation() {
    return (
        <>
            <div className="inputbox">
                <input type="text" className='input' placeholder='Search' />
                <div className='search-icon'>
                    <img src={search} alt="" />
                </div>
            </div>
        </>
    )
}
