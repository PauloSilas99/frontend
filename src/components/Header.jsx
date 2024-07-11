
import '../components/Header.css'
function Header(){
    return(
        <header className="header">
            <div>
                <span className='michroma-regular'>PS</span>
            </div>

            <div className='linksHeader'>
                <a href="">About</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </div>
        </header>
    )
}
export default Header;