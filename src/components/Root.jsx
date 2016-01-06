
var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler

var Header = require('../components/Header.jsx')
var Footer = require('../components/Footer.jsx')

var css = require('../style/root.scss');


var Root = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  render: function () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <Header {...this.props} />
          <div className="content-main">
            <RouteHandler {...this.props} />
          </div>
          <Footer {...this.props} />
          <script src='../build/bundle.js' />

        </body>
      </html>
    )
  }
})


module.exports = Root
