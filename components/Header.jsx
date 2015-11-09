var React = require('react')
var Router = require('react-router')
var Link = Router.Link



var Header = React.createClass({
  render: function () {
    return (
      <header>
        <div className="nav">
          <ul>
            <img className="picK" src="../css/img/K.png"></img>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/project'>Projects</Link></li>
          </ul>
          <hr />
        </div>

      </header>

    )
  }
})

module.exports = Header
