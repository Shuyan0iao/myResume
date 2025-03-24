import 'boxicons/css/boxicons.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Portfolio from './portfolio/portfolio';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-default">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:page" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
