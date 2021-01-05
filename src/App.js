import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Error from './Error.js';


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route component={Error} />
     
      </Switch>
      
    </>
  );
}





export default App;
