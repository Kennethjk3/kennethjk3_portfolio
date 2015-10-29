var React = require('react')
var Router = require('react-router')
var Link = Router.Link



var Header = React.createClass({
  render: function () {
    return (
      <header>
        <ul>
          <li className="Kpic"><img src="../css/img/K.png"></img></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/project'>Projects</Link></li>
        </ul>
        <hr />
      </header>

    )
  }
})

module.exports = Header
