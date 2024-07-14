
import node from '../assets/Group 5.png'
function Back(){
    return(
        <div>
            <div>
                <div>
                    <h3>Lista</h3>
                    <div>
                        <p>Lista com as funções de Criar,Visualizar,Editar e Deletar.</p>
                    </div>
                    <div>
                        <p>Desenvolvido com : Node Js</p>
                        <img src={node} alt="node" />
                    </div>
                </div>
                <div>
                    <div className='divImg'>
                       
                    </div>
                    <div className='linksProjeto'>
                        {/* <div className='linkBtn'>
                            <a href="">Ver Projeto</a>
                        </div> */}
                        <div className='linkBtn'>
                            <a href="">Repositório</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Back;