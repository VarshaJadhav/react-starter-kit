import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from '../components/screens/HomeScreen'
import AboutScreen from '../components/screens/AboutScreen'

const SiteRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/about" component={AboutScreen} />
      </Switch>
    </Router>
  )
}

export default SiteRouter