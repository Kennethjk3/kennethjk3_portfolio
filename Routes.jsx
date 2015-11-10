var React = require('react')
var Router = require('react-router')
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var Root = require('./components/Root.jsx')
var Index = require('./components/Index.jsx')
var About = require('./components/About.jsx')
var Project = require('./components/Project.jsx')
var Contact = require('./components/Contact.jsx')



var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
    <Route path='/about' handler={About} />
    <Route path='/project' handler={Project} />
    <Route path='/contact' handler={Contact} />
  </Route>
)

module.exports = Routes
