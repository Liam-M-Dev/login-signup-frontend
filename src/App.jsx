
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import WelcomePage from './pages/WelcomePage'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/welcome' element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
