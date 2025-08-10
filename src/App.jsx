import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home} from './pages/HomeFolder/Home'
import {CClub} from './pages/CClubFolder/CClub'
import {Adot} from './pages/AdotFolder/Adot'


export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cclub" element={<CClub />} />
        <Route path="/adot" element={<Adot />} />
      </Routes>
    </Router>
  )
}