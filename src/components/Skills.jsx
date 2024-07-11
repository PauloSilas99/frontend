
import '../components/Skills.css'
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

function Skills(){
    return (
        <div className="divSkills">
            <h3 className='textoSkills'>Skills</h3>
            <div className='iconsTec'>
                <div>
                    <img className='imgIcon' src={html} alt="html" />
                </div>
                <div>
                    <img className='imgIcon' src={css} alt="css" />
                </div>
                <div>
                    <img className='imgIcon' src={js} alt="js" />
                </div>
                <div>
                    <img className='imgIcon' src={ts} alt="ts" />
                </div>
                <div>
                    <img className='imgIcon' src={react} alt="react" />
                </div>
                <div>
                    <img className='imgIcon' src={vue} alt="vue" />
                </div>
                <div>
                    <img className='imgIcon' src={node} alt="node" />
                </div>
                <div>
                    <img className='imgIcon' src={jquery} alt="jquery" />
                </div>
                <div>
                    <img className='imgIconFig' src={figma} alt="figma" />
                </div>
                <div>
                    <img className='imgIcon' src={tail} alt="tail" />
                </div>
            </div>
        </div>
    )
}
export default Skills;