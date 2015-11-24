var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler
var Header = require('../components/Header.jsx')
var Footer = require('../components/Footer.jsx')

var css = require('../style/root.scss');


var Root = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <Header />
          <div className="content-main">
          <RouteHandler {...this.props} />
          <script src="bundle.js"></script>

          </div>
          <Footer />
        </body>
      </html>
    )
  }
})

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}
module.exports = Root
