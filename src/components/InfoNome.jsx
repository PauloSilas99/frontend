import foto from '../assets/Eu-2023.jpeg'
import './InfoNome.css'
import github from '../assets/mdi_github.svg'
import linkIn from '../assets/mdi_linkedin.svg'
function InfoNome(){
    return(
        <div className='divInfoNome'>
            <div className='divNome'>
                <h2 className='pNome'>Olá, me chamo <span className='michroma-regular px'>Paulo Silas</span>. Seja bem vindo!</h2>
                <div className='divDev'>
                    <p className='pFrontEnd'>Um Desenvolvedor explorando o universo Web e Mobile, dedicado a agregar valor e proporcionar uma experiência ao usuário que seja visualmente atraente e funcional.</p>
                </div>
                {/* <div className='divBtns'>
                    <div className='btn'>
                        <img src={github} alt="github" />
                        <a href="https://github.com/PauloSilas99">GitHub</a>
                    </div>
                    <div className='btn'>
                        <img src={linkIn} alt="linkIn" />
                        <a href="https://www.linkedin.com/in/paulo-silas-sodr%C3%A9-fonseca/">LinkedIn</a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default InfoNome;