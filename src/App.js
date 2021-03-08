import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/react_portfolio_v2" component={AboutMe} />
      </Switch>
      <Switch>
        <Route exact path="/react_portfolio_v2/projects" component={Projects}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
