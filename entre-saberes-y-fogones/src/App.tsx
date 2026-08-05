import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Editorial from './pages/Editorial';
import Recipes from './pages/Recipes';
import Gallery from './pages/Gallery';
import Collaborate from './pages/Collaborate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre-nosotros" element={<About />} />
          <Route path="editorial" element={<Editorial />} />
          <Route path="recetas" element={<Recipes />} />
          <Route path="galeria" element={<Gallery />} />
          <Route path="colabora" element={<Collaborate />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
