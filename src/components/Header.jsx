import React, { useState } from 'react';
import '../components/Header.css'

function Header(){

    const handleScroll = (id, e) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [modal,setModal] = useState(false);
    const abrirModal = ()=>{
        setModal(!modal)
    }

    return(
        <header className="header">
            <div>
                <span className='michroma-regular'>PS</span>
            </div>

            <div className='linksHeader'>
                <a href="#section3" onClick={(e) => handleScroll('section3', e)}>Projetos</a>
                <a href="#" onClick={()=>{abrirModal()}}>Contato</a>
            </div>
            
        </header>
    )
}
export default Header;