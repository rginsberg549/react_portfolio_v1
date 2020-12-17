import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="containiner">

<Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={AboutMe}/>
          </Switch>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
