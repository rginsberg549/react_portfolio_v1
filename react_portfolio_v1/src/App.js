import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (

<Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={AboutMe}/>
          </Switch>
          <Switch>
            <Route exact path="/projects" component={Projects}></Route>


          </Switch>
          
          <Footer/>
        </Router>
  );
}

export default App;
