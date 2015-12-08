var React = require('react')
import { Router, Route } from 'react-router';
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
            <script
              id='initial-props'
              type='application/json'/>
            <script src='bundle.js' />
            <RouteHandler {...this.props} />

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
