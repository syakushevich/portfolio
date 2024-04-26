import background from './images/background.jpg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ProjectPage from './pages/ProjectPage';
import HirePage from './pages/HirePage';
import AboutPage from './pages/AboutPage';
import Navbar from './Navbar';

function App() {
  const containerWidth = 'max-w-6xl';

  return (
    <Router basename="/portfolio">
      <div className="relative min-h-screen bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={background} alt="" className="w-full" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%0A%20%20stroke-opacity%3D%220.04%22%3E%0A%20%20%3Cpath%20d%3D%22M0%20.5H31.5V32%22%20%2F%3E%0A%3C%2Fsvg%3E%0A')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className={`relative mx-auto px-52 ${containerWidth}`}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<IndexPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/hire-me" element={<HirePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
