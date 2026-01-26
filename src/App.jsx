import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FreeContent from './pages/FreeContent'
import HowItWorks from './pages/HowItWorks'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/free-content" element={<FreeContent />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
    </Routes>
  )
}

export default App
