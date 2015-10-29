var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Header = React.createClass({
  render: function () {
    return (
      <header>
        <ul style={{display: 'inline', listStyleType: 'none'}}>
          <li style={{display: 'inline', padding: '20px'}}><Link to='/'>Index</Link></li>
          <li style={{display: 'inline', padding: '20px'}}><Link to='/about'>About</Link></li>
          <li style={{display: 'inline', padding: '20px'}}><Link to='/project'>Project</Link></li>
        <hr />
        </ul>
      </header>
    )
  }
})

module.exports = Header
