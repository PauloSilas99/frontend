
import '../components/Front.css'
import imgNode from '../assets/captura-back.png'
import node from '../assets/node-icon.svg'
import mdb from '../assets/mdb-icon.svg'
import py from '../assets/icon-py.svg'
import fast from '../assets/icon-fastapi.svg'
import imgPy from '../assets/projeto-fastapi.png'
import DoughnutChart from '../components/Grafico.jsx'
function Back(){
    return(
        <div className='projetos'>
            <div className="projetoArea semBorda">
                <div className='divTexto'>
                    <h3>Regitro de Usuário</h3>
                    <div className='divDescricao'>
                        <p>Regitro de Usuário com nome,idade e email.O cadastro está sendo armazenado em um banco de dados MongoDb,que está sendo relacionado por meio do <strong>Prisma</strong>.Foram desenvolvidas rotas de get,post e delete</p>
                    </div>
                    <div className='tecnologia'>
                        <p>Desenvolvido com : Node + MongoDb</p>
                        <img src={node} alt="node" />
                        <img style={{width:'60px'}} src={mdb} alt="mdb" />
                    </div>
                </div>
                <div className='divGrafico'>
                    <DoughnutChart 
                    labels={['Node']}
                    dataValues={[1230]} 
                    />
                </div>
                <div className='divImgLinks'>
                    <div className='divImg'>
                        <img src={imgNode} alt="imgNode" />
                    </div>
                    <div className='linksProjeto'>
                        <div className='linkBtn'>
                            <a href="https://github.com/PauloSilas99/api-node.git" target='_blank'>Ver Projeto</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projetoArea semBorda">
                <div className='divTexto'>
                    <h3>API</h3>
                    <div className='divDescricao'>
                        <p>API dsenvolvida com os principios CRUD, indicando nome, descrição, preço e se o item está em oferta ou não.</p>
                    </div>
                    <div className='tecnologia'>
                        <p>Desenvolvido com : Python + FastApi</p>
                        <img src={py} alt="py" />
                        <img style={{width:'70px'}} src={fast} alt="fast" />
                    </div>
                </div>
                <div className='divGrafico'>
                    <DoughnutChart 
                    labels={['Python']}
                    dataValues={[1230]} 
                    />
                </div>
                <div className='divImgLinks'>
                    <div className='divImg'>
                        <img src={imgPy} alt="imgPy" />
                    </div>
                    <div className='linksProjeto'>
                        <div className='linkBtn'>
                            <a href="https://github.com/PauloSilas99/crud-simples-fastapi.git" target='_blank'>Ver Projeto</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Back;