
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/navbar'
import Header from './components/Header'
import Saudacao from './components/saudacao/saudacao'
import BotaoDinamico from './components/BotaoDinamico/Botaodinamico'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from './components/pages/Login'
import HomePage from './components/pages/HomePage'
// import ListaDeTenis from './components/ListaTenis/insex'



function App() {
  
  // const saldo =10
  // const saldo2=12

  return (
    <>
      {/* <NavbarComponent/> */}
      <Router>
        <div>
        <Header/>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<HomePage/>}/>
        
        </Routes>

        </div>
      </Router>

      {/* <ListaDeTenis/> */}
      
      {/* <Header/> */}
      {/* <Saudacao nome="Fulano" saldo={saldo}/>
      <Saudacao nome="bet" saldo={saldo2}/>
      <BotaoDinamico cor = "blue "> enviar</BotaoDinamico> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button >
          count is 
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
