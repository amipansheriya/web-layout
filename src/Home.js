import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './header';
import Campus from './campus';
import Addmission from './addmission';
import Teacher from './teacher';
import Event from './Event';
import Footer from './Footer';
import { Routes, Route } from "react-router-dom";
import About from './About';
import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
  
        
        <Campus/>
        <Addmission/>
        <Teacher/>
        <Event/>

  
      </div>
    );
  }
  export default Home;