import './App.scss';
import "./theme.scss"
import Home from './Screens/Home/index';
import Experience from './Screens/Experience/index';
import Tech from './Screens/Tech/index';
import Project from './Screens/Project/index';
import Footer from './Screens/Footer/index';
import Header from './Screens/Header/index';
import About from './Screens/About/index';
// import Techn from './Screens/Techn/Techn';
// import Tech2 from './Screens/Tech2';

function App() {

  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Experience/>
      <Tech/>
      {/* <Tech2/> */}
      {/* <Techn/> */}
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
