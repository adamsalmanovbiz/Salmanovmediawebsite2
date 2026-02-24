import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FreeContent from './pages/FreeContent'
import HowItWorks from './pages/HowItWorks'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/free-content" element={<FreeContent />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  )
}

export default App
