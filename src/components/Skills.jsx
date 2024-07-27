
import '../components/Skills.css'
import Tecnologias from './Tecnologias'
import Interpessoais from './Interpessoais'
import Servicos from './Servicos'
import { useState } from 'react'

function Skills(){

    const [hab,setHab] = useState('tecnologia')
    const DivInfoSkills = ()=>{
        if(hab ==='tecnologia'){
            return <Tecnologias /> 
        }else if(hab ==='interpessoal'){
            return <Interpessoais />
        }else if(hab ==='servicos'){
            return <Servicos />
        }
    }

    return (
        <div className="divSkills">
            <h2 className='michroma-regular'>Habilidades</h2>
            <div className='DivHab'>
                <div className='divBtnHab'>
                    <button onClick={()=>{setHab('tecnologia')}}>Tecnologicas</button>
                    <button onClick={()=>{setHab('interpessoal')}}>Interpessoais</button>
                    <button onClick={()=>{setHab('servicos')}}>Serviços</button>
                    <button>Baixar CV</button>
                </div>
                <div className='divReaultadoHab'>
                    {DivInfoSkills()}
                </div>
            </div>
        </div>
    )
}
export default Skills;