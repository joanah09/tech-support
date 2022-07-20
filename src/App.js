import logo from './logo.svg';
import './App.scss';
import Header from './components/globalComponents/header/headerComponent';
import './components/css/dist/css/bootstrap.min.css';
import data from './data.js';
import Home from './pages/home';
import Footer from './components/globalComponents/footer/footerComponent';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ParallaxProvider } from 'react-scroll-parallax';

library.add(fab, fas)

function App() {
  return (
    <div className="App">
      <Header />
        <ParallaxProvider>
          <Home />
        </ParallaxProvider>
      <Footer />
    </div>
  );
}

export default App;
