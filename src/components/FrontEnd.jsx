import '../components/Front.css'
import reactjs from '../assets/Vector.png'

function Front(){
    return (
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
    )
}
export default Front;