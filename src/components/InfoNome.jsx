import foto from '../assets/Eu-2023.jpeg'
import './InfoNome.css'
import github from '../assets/mdi_github.svg'
import linkIn from '../assets/mdi_linkedin.svg'
function InfoNome(){
    return(
        <div className='divInfoNome'>
            <div>
                <img className='imgEu' src={foto} alt="foto" />
            </div>
            <div className='divNome'>
                <h1 className='michroma-regular'>Paulo Silas</h1>
                <p className='pFrontEnd'>FrontEnd Developer</p>
                <div className='divBtns'>
                    <div className='btn'>
                        <img src={github} alt="github" />
                        <a href="https://github.com/PauloSilas99">GitHub</a>
                    </div>
                    <div className='btn'>
                        <img src={linkIn} alt="linkIn" />
                        <a href="https://www.linkedin.com/in/paulo-silas-sodr%C3%A9-fonseca/">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InfoNome;