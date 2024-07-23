import '../components/Front.css'
import reactjs from '../assets/Vector.png'
import imgReact from '../assets/CapturaProjetoReact 1.svg'
import ProjetoApp from '../assets/projeto-app.png'
import VueLista from '../assets/vue-lista 1.png'
import vue from '../assets/Group 4.png'

function Front(){
    return (
        <div className='projetos'>
            <div className="projetoFront">
                <div className='divTexto'>
                    <h3>Regitro de Motos</h3>
                    <div className='divDescricao'>
                        <p>Lista de registro de Motos com nome,valor,cor e opção de estoque.Cada moto adicionada pode ser editada ou excluída</p>
                    </div>
                    <div className='tecnologia'>
                        <p>Desenvolvido com : React.Js</p>
                        <img src={reactjs} alt="reactjs" />
                    </div>
                </div>
                <div className='divImgLinks'>
                    <div className='divImg'>
                        <img src={imgReact} alt="imgReact" />
                    </div>
                    <div className='linksProjeto'>
                        <div className='linkBtn'>
                            <a href="https://teste-motoca-systems-front-6s7c10yjg-paulo-silas-projects.vercel.app/">Ver Projeto</a>
                        </div>
                        <div className='linkBtn'>
                            <a href="https://github.com/PauloSilas99/teste-motocaSystems-frontEnd">Repositório</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projetoFront">
                <div className='divTexto'>
                    <h3>App Registro de Débito</h3>
                    <div className='divDescricao'>
                        <p>Esse Aplicativo visa melhorar o registro de débitos de seu usuário. Com um visual fácil e prático, os registros ficam armazenasdos com um fácil manuseio.</p>
                    </div>
                    <div className='tecnologia'>
                        <p>Desenvolvido com : React Native + Expo</p>
                        <img src={reactjs} alt="reactjs" />
                    </div>
                </div>
                <div className='divImgLinks'>
                    <div className='divImg projApp'>
                        <img src={ProjetoApp} alt="ProjetoApp" />
                    </div>
                    <div className='linksProjeto'>
                        <div className='linkBtn'>
                            <a href="https://github.com/PauloSilas99/AppCobran-a.git">Repositório</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projetoFront">
                <div className='divTexto'>
                    <h3>Lista de Atividades</h3>
                    <div className='divDescricao'>
                        <p>Lista de atividades acompanhado de data e hora no registro e na edição.</p>
                    </div>
                    <div className='tecnologia'>
                        <p>Desenvolvido com : Vue</p>
                        <img src={vue} alt="vue" />
                    </div>
                </div>
                <div className='divImgLinks'>
                    <div className='divImg listaVue'>
                        <img src={VueLista} alt="VueLista" />
                    </div>
                    <div className='linksProjeto'>
                    <div className='linkBtn'>
                            <a href="https://lista-vue-chi.vercel.app/">Ver Projeto</a>
                        </div>
                        <div className='linkBtn'>
                            <a href="https://github.com/PauloSilas99/lista-vue.git">Repositório</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Front;