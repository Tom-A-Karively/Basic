import React, { useState } from 'react'
import './index.css'

function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <div className='headerContainer'>
            <header className='header'>
                <div className="headerTitle">Header</div>
                <button className={`drawerButton ${isDrawerOpen ? 'shifted' : ''}`} onClick={openDrawer}></button>
            </header>
            <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
                Drawer
            </div>
        </div>
    )
}

export default Header