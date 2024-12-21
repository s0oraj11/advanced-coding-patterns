import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import Patterns from './pages/Patterns'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/patterns" element={<Patterns />} />
      </Routes>
    </Router>
  )
}

export default App

