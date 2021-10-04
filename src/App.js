/* import logo from './logo.svg'; */
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
// import Service from './components/Service/Service';
function App() {
  return (
    <div className="App">
      <Router>
      <Banner></Banner>
        <Switch>
          <Route  path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="*">
           <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
