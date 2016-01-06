var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Header = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  render: function() {
    return (
      <header>
        <div classgit Name="nav">
          <img className="picK" src="./src/style/img/K2.png"></img>
          <ul className="nav-ul">
            <li className="nav-li">
              <Link to='/'>Home</Link>
            </li>
            <li className="nav-li">
              <Link to='/about' activeClassName="active">About</Link>
            </li>
            <li className="nav-li">
              <Link to='/project' activeClassName="active">Projects</Link>
            </li>
            <li className="nav-li">
              <Link to='/resume' activeClassName="active">Resume</Link>
            </li>
            <li className="nav-li">
              <Link to='/contact' activeClassName="active">Contact Me</Link>
            </li>
          </ul>
        </div>
      </header>

    )
  }
})

module.exports = Header
