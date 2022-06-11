import { FunctionalComponent, h } from 'preact'
import { Route, Router } from 'preact-router'
import baseroute from '../baseroute'
// pages
import Home from '../routes/home'
import Login from '../routes/login'
import NotFoundPage from '../routes/notfound'
import Review from '../routes/review'

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <Router>
        <Route path={`${baseroute}/`} component={Home} />
        <Route path={`${baseroute}/login `} component={Login} />
        <Route path={`${baseroute}/review`} component={Review} />
        <NotFoundPage default />
      </Router>
    </div>
  )
}

export default App
