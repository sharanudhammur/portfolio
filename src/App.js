import './App.scss';
import "./theme.scss"
import Home from './Screens/Home/Home';
import Experience from './Screens/Experience/Experience';
import Tech from './Screens/Tech/Tech';
import Project from './Screens/Project/Project';
import Footer from './Screens/Footer/Footer';
import Header from './Screens/Header';
import About from './Screens/About';
import Techn from './Screens/Techn/Techn';
import Tech2 from './Screens/Tech2';

function App() {

  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Tech/>
      <Tech2/>
      <Techn/>
      <Experience/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
