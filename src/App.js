import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Error from './Error.js';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route component={Error} />
        <Helmet>
          <script type="text/babel" src="./jquery.min.js" />
          <script type="text/babel" src="./jquery.scrollex.min.js" />
          <script type="text/babel" src="./jquery.scrolly.min.js" />
          <script type="text/babel" src="./browser.min.js" />
          <script type="text/babel" src="./breakpoints.min.js" />
          <script type="text/babel" src="./util.js" />
          <script type="text/babel" src="./main.js" />
      </Helmet>
      </Switch>
      
    </>
  );
}





export default App;
