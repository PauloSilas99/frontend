import RadarTecnologia from "./RadarGrafico";
import js from '../assets/js-icon.svg'
import ts from '../assets/ts-icon.svg'
import react from '../assets/react-icon.svg'
import vue from '../assets/logo-vue.svg'
import node from '../assets/node-icon.svg'
import jquery from '../assets/jquery-icon.svg'
import figma from '../assets/figma-icon.svg'
import tail from '../assets/tail-icon.svg'



const Tecnologicas = () =>{
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '300px',gap:'20px'}}>               
                <div>
                    <img style={{width:'50px'}} src={figma} alt="figma" />
                </div>
                <div>
                    <img style={{width:'50px'}} src={tail} alt="tail" />
                </div>
                <div>
                    <img style={{width:'50px'}} src={js} alt="js" />
                </div>
                <div>
                    <img style={{width:'50px'}} src={jquery} alt="jquery" />
                </div>
                <div>
                    <img style={{width:'50px'}} src={ts} alt="ts" />
                </div>
                <div>
                    <img style={{width:'50px'}} src={react} alt="react" />
                </div>
                <div>
                    <img style={{width:'50px'}} src={vue} alt="vue" />
                </div>
                <div>
                    <img style={{width:'50px'}} src={node} alt="node" />
                </div>
            </div>
            <RadarTecnologia />
        </div>
    )
}
export default Tecnologicas;