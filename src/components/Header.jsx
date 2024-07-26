import React, { useState } from 'react';
import '../components/Header.css'

function Header({ abrirModal }){

    const handleScroll = (id, e) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <header className="header">
            <div>
                <span className='michroma-regular'>PS</span>
            </div>

            <div className='linksHeader'>
                <a href="#section3" onClick={(e) => handleScroll('section3', e)}>Projetos</a>
                <a href='#' onClick={ abrirModal }>Contato</a>
            </div>
            
        </header>
    )
}
export default Header;