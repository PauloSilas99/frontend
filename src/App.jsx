
import './App.css'
import Header from './components/Header'
import InfoNome from './components/InfoNome'
import Sobre from './components/Sobre'
import Skills from './components/Skills'
import Contato from './components/Contato'

function App() {
  

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
          <button>FrontEnd</button>
          <button>Backend</button>
        </div>
      </div>
      <div className='areaProjetos'>

      </div>
      <div id='section4'>
        <Contato  /> 
      </div>
    </>
  )
}

export default App
