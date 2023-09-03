import React from 'react'
import { NavLink } from 'react-router-dom'

const BestSellers = () => {
    return (
        <>
            <NavLink to='/all/bestsellers' activeClassName='active' className='links'>ALL</NavLink>
            <NavLink to='/electronics/bestsellers' activeClassName='active' className='links'>ELECTRONICS</NavLink>
            <NavLink to='/mobile/bestsellers' activeClassName='active' className='links'>Mobile</NavLink>
            <NavLink to='/tab/bestsellers' activeClassName='active' className='links'>Tab</NavLink>
            <NavLink to='/watch/bestsellers' activeClassName='active' className='links'>Watch</NavLink>
        </>
    )
}
export default BestSellers