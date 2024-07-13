import '../components/Front.css'
import reactjs from '../assets/Vector.png'
import imgReact from '../assets/CapturaProjetoReact 1.svg'

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
        </div>
    )
}
export default Front;