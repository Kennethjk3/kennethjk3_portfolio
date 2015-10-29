var React = require('react')
var Router = require('react-router')
var Link = Router.Link



var Header = React.createClass({
  render: function () {
    return (
      <header>
        <ul>
          <li><Link to='/'>Index</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/project'>Project</Link></li>
        </ul>
        <hr />
      </header>

    )
  }
})

module.exports = Header
