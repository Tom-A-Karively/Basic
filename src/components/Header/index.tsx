import React, { useState } from 'react'
import './index.css'

function Header(props:any) {
    let {isDrawerOpen, buttonHandle} = props
 
    return (
        <div className='headerContainer'>
            <header className='header'>
                <div className="headerTitle">Header</div>
                <button className={`drawerButton ${isDrawerOpen ? 'shifted' : ''}`} onClick={buttonHandle}></button>
            </header>
           
        </div>
    )
}

export default Header