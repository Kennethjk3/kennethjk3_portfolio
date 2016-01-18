var React = require('react')

var Router = require('react-router')
var Route = Router.Route

var IndexRoute = Router.IndexRoute
var Root = require('./components/Root.jsx')
var Home = require('./components/Home.jsx')
var About = require('./components/About.jsx')
var Project = require('./components/Project.jsx')
var Resume = require('./components/Resume.jsx')
var Contact = require('./components/Contact.jsx')

var Routes = (
  <Route path='/' component={Root} >
    <IndexRoute component={Home} />

    <Route path='/about' component={About} />
    <Route path='/project' component={Project} />
    <Route path='/resume' component={Resume} />
    <Route path='/contact' component={Contact} />
  </Route>
)

module.exports = Routes
