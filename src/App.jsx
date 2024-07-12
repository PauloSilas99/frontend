
import './App.css'
import Header from './components/Header'
import InfoNome from './components/InfoNome'
import Sobre from './components/Sobre'
import Skills from './components/Skills'
import Contato from './components/Contato'
import { useState } from 'react'
import Front from './components/FrontEnd'
import Back from './components/Back'


function App() {
  
  const [componente,setComponente] = useState('Front')
  const renderComponente = ()=>{
    if(componente === 'Front'){
      return <Front />
    }else if(componente === 'Back'){
      return <Back />
    }
  }

  return (
    <>
      <Header  />
      <InfoNome />
      <div className='divInfoSkills'>
        <div id='section1'>
          <Sobre  />
        </div>
        <div id='section2'>
          <Skills  />
        </div>
       
      </div>
      <div className='divProjetos' id='section3'>
        <h3>Projects:</h3>
        <div className='divBtns'>
          <button onClick={()=>{setComponente('Front')}}>Frontend</button>
          <button onClick={()=>{setComponente('Back')}}>Backend</button>
        </div>
      </div>
      <div className='areaProjetos'>
      {renderComponente()}
      </div>
      <div id='section4'>
        <Contato  /> 
      </div>
    </>
  )
}

export default App
