import './App.css';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from "react-router-dom";
import About from './About';
// import { Link } from "react-router-dom";
import Home from './Home';
import Header from './header';
import Footer from './Footer';
import Register from './Register';
import Contact from './contact';
import Blog from './Blog';


function App() {
  return (
    <div className="App">

      
      <Header/>
      {/* <Campus/>
      <Addmission/>
      <Teacher/>
      <Event/> */}
      

      <Routes>
        {/* <Route path="/" element={ <About/> } /> */}
        <Route path="/" element={ <Home/> } />
        <Route path="/About" element={ <About/> } />
        <Route path="/Register" element={ <Register/> } />
        <Route path="/Contact" element={ <Contact/> } />
        <Route path="/Blog" element={ <Blog/> } />
      </Routes>

      <Footer/>
    </div>
  );
}
export default App;
