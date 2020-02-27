import React, {Suspense} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

import Layout from './components/layout/layout.component';
import Loading from './components/loading/loading.component';

import './App.scss';



const App = () => {
  
  return (
      <Router>
        <div className="App">
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/">
                <Redirect to='/en/' />
              </Route>
              <Route path="/:lang/" component={Layout} />
            </Switch>
          </Suspense>
        </div>
      </Router>
  );
}



export default App;
