import React from 'react';
import '../components/Header.css'
function Header(){

    const handleScroll = (id, event) => {
        event.preventDefault();
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
                {/* <a href="#section1" onClick={(e) => handleScroll('section1', e)}>About</a>
                <a href="#section2" onClick={(e) => handleScroll('section2', e)}>Skills</a> */}
                <a href="#section3" onClick={(e) => handleScroll('section3', e)}>Projects</a>
                <a href="#section4" onClick={(e) => handleScroll('section4', e)}>Contato</a>
            </div>
        </header>
    )
}
export default Header;