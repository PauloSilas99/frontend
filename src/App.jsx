
import './App.css'
import Header from './components/Header'
import InfoNome from './components/InfoNome'
import Sobre from './components/Sobre'
import Skills from './components/Skills'

function App() {
  

  return (
    <>
      <Header  />
      <InfoNome />
      <div className='divInfoSkills'>
        <Sobre />
        <Skills />
      </div>
      <div className='divProjetos'>
        <h3>Projects:</h3>
        <div className='divBtns'>
          <button>FrontEnd</button>
          <button>Backend</button>
        </div>
      </div>
      <div className='areaProjetos'>

      </div>
      
      
    </>
  )
}

export default App
