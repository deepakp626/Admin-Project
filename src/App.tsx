// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoardLayout from './components/DashBoardLayout';
import DashBoard from './pages/DashBoard';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashBoardLayout/>} />
          {/* <Route path="/" element={<DashBoard />} /> */}
        </Routes>
      </Router>
      
    </>
  )
}

export default App
