import RadarTecnologia from "./RadarGrafico";
import html from '../assets/html-5.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import ts from '../assets/Group 3.png'
import react from '../assets/Vector.png'
import vue from '../assets/Group 4.png'
import node from '../assets/Group 5.png'
import jquery from '../assets/Group 6.png'
import figma from '../assets/Group 7.png'
import tail from '../assets/Group 8.png'



const Tecnologicas = () =>{
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '300px',gap:'20px'}}>
                <div>
                    <img style={{width:'60px'}} src={html} alt="html" />
                </div>
                <div>
                    <img style={{width:'60px'}} src={css} alt="css" />
                </div>
                <div>
                    <img style={{width:'60px'}} src={js} alt="js" />
                </div>
                <div>
                    <img style={{width:'60px'}} src={ts} alt="ts" />
                </div>
                <div>
                    <img style={{width:'60px'}} src={react} alt="react" />
                </div>
                <div>
                    <img style={{width:'60px'}} src={vue} alt="vue" />
                </div>
                <div>
                    <img style={{width:'60px'}} src={node} alt="node" />
                </div>
                <div>
                    <img style={{width:'65px'}} src={jquery} alt="jquery" />
                </div>
                <div>
                    <img style={{width:'40px'}} src={figma} alt="figma" />
                </div>
                <div>
                    <img style={{width:'60px'}} src={tail} alt="tail" />
                </div>
                
            </div>
            <RadarTecnologia />
        </div>
    )
}
export default Tecnologicas;