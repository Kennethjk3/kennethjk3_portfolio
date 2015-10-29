var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler
var Header = require('../components/Header.jsx')

var Root = React.createClass({
  render: function () {
    this.props.webpackStats = undefined
    var initialProps = {
      __html: safeStringify(this.props)
    }
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body style={{backgroundColor: '#808080' }}>
          <Header {...this.props} />
          <RouteHandler {...this.props} />
          <script
            id='initial-props'
            type='application/json'
            dangerouslySetInnerHTML={initialProps} />
          <script src='bundle.js' />
        </body>
      </html>
    )
  }
})

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}
module.exports = Root
