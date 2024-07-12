import '../components/Contato.css'
import linkedin from '../assets/mdi_linkedin.svg'
import email from '../assets/email.svg'
import whats from '../assets/whats.svg'
import github from '../assets/mdi_github.svg'

function Contato(){
    return (
        <div className='divContato'>
            <h3>Contact:</h3>
            <div className='divIconsContato'>
                <div className='icons'>
                    <div className='iconContato'>
                        <a href="https://www.linkedin.com/in/paulo-silas-sodr%C3%A9-fonseca/">
                        <img className='icon' src={linkedin} alt="linkedin" />
                        </a>
                        <span>LinkedIn</span>
                    </div>
                    <div className='iconContato'>
                        <a href="mailto:fonsecasodreps@hotmail.com">
                        <img className='icon' src={email} alt="linkedin" />
                        </a>
                        <span>Email</span>
                    </div> 
                    <div className='iconContato'>
                        <a href="https://wa.me/5599981120059">
                        <img className='icon' src={whats} alt="WhatsApp" />
                        </a>
                        <span>WhatsApp</span>
                    </div>  
                    <div className='iconContato'>
                        <a href="https://github.com/PauloSilas99">
                        <img className='icon' src={github} alt="github" />
                        </a>
                        <span>GitHub</span>
                    </div>                         
                </div>
                <span>Localização: Imperatriz-MA, Brasil</span>
            </div>
            <span className='spanCopy'>© 2024 Paulo Silas</span>
        </div>
    )
}
export default Contato;