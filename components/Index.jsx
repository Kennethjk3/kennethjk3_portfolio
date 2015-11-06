var React = require('react')

var Index = React.createClass({
  render: function () {
    return (
      <main className="indexContent">
        <div className="hContent">
          <h3>Hello!</h3>
          <p>I'm Kenneth Kier and this site is all about me!</p>
        </div>
        <div>
          <img className="picMe" src="./css/img/Me.jpg"></img>
        </div>
      </main>


    )
  }
})

module.exports = Index
