/* import logo from './logo.svg'; */
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Services from './components/Services/Services';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Instructors from './components/Instructors/Instructors';

function App() {
  return (
    <div className="App">
      <Router>
      <Banner></Banner>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/instructors">
            <Instructors></Instructors>
          </Route>
          <Route exact path="/courses">
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
