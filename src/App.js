import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import './css/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from './pages/home';

library.add(fab, fas)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ParallaxProvider><Home /></ParallaxProvider>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
