var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <div className="nav">
          <img className="picK" src="../style/img/K2.png"></img>
          <ul className="nav-ul">
            <li className="nav-li">
              <Link to='/'>Home</Link>
            </li>
            <li className="nav-li">
              <Link to='/about'>About</Link>
            </li>
            <li className="nav-li">
              <Link to='/project'>Projects</Link>
            </li>
            <li className="nav-li">
              <Link to='/contact'>Contact Me</Link>
            </li>
          </ul>
          <hr/>
        </div>
      </header>

    )
  }
})

module.exports = Header
