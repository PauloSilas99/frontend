import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import InfoNome from './components/InfoNome'
import Skills from './components/Skills'
import Footer from './components/Footer.jsx'
import Front from './components/FrontEnd'
import Back from './components/Back'
import Contato from './components/Contato.jsx'

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
      <Header />
      <Contato isOpen={false}/>
      <InfoNome />
      <div className='divInfoSkills'>
        <div>
          <Skills  />
        </div>
      </div>
      <div className='divProjetos' id='section3'>
        <h3>Projetos Recentes</h3>
        <div className='divBtns'>
          <button onClick={()=>{setComponente('Front')}}>Frontend</button>
          <button onClick={()=>{setComponente('Back')}}>Backend</button>
        </div>
      </div>
      <div className='areaProjetos'>
        {renderComponente()}
      </div>
      <div id='section4'>
        <Footer  /> 
      </div>
    </>
  )
}

export default App