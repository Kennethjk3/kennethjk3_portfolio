var React = require('react')

var style = {
  color: '#42ff00'
};

var Project = React.createClass({
  render: function () {
    return (
      <main>
        <p style={style}>Project component</p>
      </main>
    )
  }
})

module.exports = Project
