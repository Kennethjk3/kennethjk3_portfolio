var React = require('react')

var Header = require('../components/Header.jsx')


var Resume = React.createClass({

  render: function() {
    return (
      <main>
      <div>
        <Header {...this.props} />

      </div>
    </main>
    )
  }
})

module.exports = Resume
