import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Contact />
      </main>
      <footer className="text-center py-3 bg-dark text-white">
        <div className="container">&copy; {new Date().getFullYear()} Team Project — Lucky student explains components</div>
      </footer>
    </div>
  );
}

export default App;
