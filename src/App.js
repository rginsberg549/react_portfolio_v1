import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { HashRouter, Router, Route, Switch } from "react-router-dom";
import { render } from "@testing-library/react";

function App() {
  render()
  return (
    <HashRouter basename="/">
      <Navbar />
      <Switch>
        <Route exact path="/" component={AboutMe} />
      </Switch>
      <Switch>
        <Route path="/projects" component={Projects}></Route>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
