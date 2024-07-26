import '../components/Contato.css'
import email from '../assets/email.svg'
import whats from '../assets/whats.svg'
import linkedin from '../assets/mdi_linkedin.svg'
import instagram from '../assets/instagram.svg'
import fechar from '../assets/iconExcluir.svg'

function Contato({ fecharModal }){
    
    return(
        <div className='corpoDiv'>
            <div className='DivAreaContato'>
                <div className='tituloIcon'>
                    <h2>Contato</h2>
                    <div className='iconFechar'>
                        <img src={fechar} alt="fechar" onClick={fecharModal} />
                    </div>
                </div>
                <div>
                    <p>Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou deseja discutir como posso ajudar sua equipe, sinta-se à vontade para entrar em contato comigo.</p>
                </div>
                <div className='divLinks'>
                    <div className='contatodiv'>
                        <a href="mailto:fonsecasodreps@hotmail.com" target='_blank'>
                        <img className='icon' src={email} alt="linkedin"/>
                        </a>
                    </div> 
                    <div className='contatodiv'>
                        <a href="https://wa.me/5599981120059" target='_blank'>
                        <img className='icon' src={whats} alt="WhatsApp" />
                        </a>
                    </div>
                    <div className='contatodiv'>
                        <a href="https://www.linkedin.com/in/paulo-silas-sodr%C3%A9-fonseca/" target='_blank'>
                        <img className='icon' src={linkedin} alt="linkedin" />
                        </a>
                    </div>
                    <div className='contatodiv'>
                        <a href="https://www.instagram.com/paulosilas.sf" target="_blank">
                        <img className='icon' src={instagram} alt="Instagram" />
                        </a>
                    </div>
                </div>
                <div>
                    <p>Respondo rapidamente e estou ansioso para ouvir suas ideias!</p>
                </div>
            </div>
        </div>
    )
    
    
}
export default Contato;