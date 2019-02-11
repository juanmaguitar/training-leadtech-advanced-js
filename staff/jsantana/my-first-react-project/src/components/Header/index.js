import React from 'react';

import './index.css'

const Header = ({title}) => {
    const msg = 'Hello!'
    return(
        <div className='Header'>
            <h1>{title}</h1> 
            <p>{ msg }</p>
        </div>  
    )
}

export default Header
