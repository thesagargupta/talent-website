import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import TalentListPage from "./pages/TalentListPage"
import BrowseTalent from "./pages/BrowseTalent"
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list-talent" element={<TalentListPage />} />
          <Route path="/browse-talents" element={<BrowseTalent />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
