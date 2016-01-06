var React = require('react')

var Home = React.createClass({
  render: function() {
    return (
      <main>
        <div className="home-container">
          <img className="picMe" src="./src/style/img/headshot.jpg"/>
          <p className="home-text">
            Hello!
            <br/>
            I'm Kenneth Kier
          </p>
        </div>
      </main>
    )
  }
})

module.exports = Home
