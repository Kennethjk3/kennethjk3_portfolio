var React = require('react')
var Router = require('react-router')
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var Root = require('./components/Root.jsx')
var Home = require('./components/Home.jsx')
var About = require('./components/About.jsx')
var Project = require('./components/Project.jsx')
var Resume = require('./components/Resume.jsx')
var Contact = require('./components/Contact.jsx')



var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Home} />
    <Route path='/about' handler={About} />
    <Route path='/project' handler={Project} />
    <Route path='/resume' handler={Resume} />
    <Route path='/contact' handler={Contact} />
  </Route>
)

module.exports = Routes
