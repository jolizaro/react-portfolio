import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <div className="App">
        <Route path="/" exact component = {Home} />
        <Route path="/contact" component = {Contact} />
        <Route path="/portfolio" component = {Portfolio} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
