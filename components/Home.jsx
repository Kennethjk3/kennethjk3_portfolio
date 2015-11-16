var React = require('react')

var Home = React.createClass({
  render: function() {
    return (
      <main>
        <div className="container">
          <div className="columnleft">
            <img className="picMe" src="./style/img/headshot.jpg"/>
          </div>
          <div className="columnright">
            <h1>Hello! <br />I'm Kenneth Kier </h1>
          </div>
        </div>
      </main>
    )
  }
})

module.exports = Home
