import './App.scss';
import Home from './Screens/Home/Home';
import Experience from './Screens/Experience/Experience';
import Tech from './Screens/Tech/Tech';
import Project from './Screens/Project/Project';
import Footer from './Screens/Footer/Footer';

function App() {
  console.log("push")
  return (
    <div className="App">
      <Home/>
      <Experience/>
      <Tech/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
