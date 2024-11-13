import { HashRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Home';
import Propos from './Propos';
import Contact from './Contact';
import './style.css'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
