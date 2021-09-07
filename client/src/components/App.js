import React from 'react'
import '../styles/App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./router/Home"
import Update from "./router/Update"
import RestDetails from "./router/RestDetails"
import { RestaurantsContextProvider } from './context/RestaurantsContext'

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/restaurants/:id/update" component={Update}/>
            <Route exact path="/restaurants/:id" component={RestDetails}/>
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  )
}

export default App