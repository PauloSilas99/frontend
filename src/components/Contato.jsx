import '../components/Contato.css'
import linkedin from '../assets/mdi_linkedin.svg'
import email from '../assets/email.svg'
import whats from '../assets/whats.svg'
import github from '../assets/mdi_github.svg'
import instagram from '../assets/instagram.svg'

function Contato(){
    return (
        <div className='divContato'>
            <div className='divIconsContato'>
                <div>
                    <span className='michroma-regular'>PS</span>
                </div>
                <div>
                    <p className='txtMot'>"A prática leva à perfeição, mas a persistência leva à maestria."</p>
                </div>
                <div className='icons'>
                    <div className='iconContato'>
                        <a href="https://www.linkedin.com/in/paulo-silas-sodr%C3%A9-fonseca/" target="_blank">
                        <img className='icon' src={linkedin} alt="linkedin" />
                        </a>
                        <span>LinkedIn</span>
                    </div>
                    {/* <div className='iconContato'>
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
                    </div>   */}
                    <div className='iconContato'>
                        <a href="https://www.instagram.com/paulosilas.sf" target="_blank">
                        <img className='icon' src={instagram} alt="Instagram" />
                        </a>
                        <span>Instagram</span>
                    </div>
                    <div className='iconContato'>
                        <a href="https://github.com/PauloSilas99" target="_blank">
                        <img className='icon' src={github} alt="github" />
                        </a>
                        <span>GitHub</span>
                    </div>                         
                </div>
            </div>
            <span className='spanCopy'>© 2024 Paulo Silas</span>
        </div>
    )
}
export default Contato;