
var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler

var Header = require('../components/Header.jsx')
var Footer = require('../components/Footer.jsx')



var Root = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  render: function () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <Header {...this.props} />
          <div className="content-main">
            <RouteHandler {...this.props} />
          </div>
          <Footer {...this.props} />
          <script src='bundle.js' />

        </body>
      </html>
    )
  }
})


module.exports = Root
