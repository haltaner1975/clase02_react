import React, { useState } from 'react';



const Menu = () => {
    const [items, setItems] = useState(['Portfolio', 'About','Contact']);

    return(
        <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
        {items.map((item, index) => (
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">{item}</a></li>
         ))}    
        </ul>
        </div>
    );
}

export default Menu;