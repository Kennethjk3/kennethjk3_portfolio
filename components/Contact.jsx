var React = require('react')

var Contact = React.createClass({
  render: function () {
    return (
      <main>
        <div className='social'>
          <a href='https://www.facebook.com/KenJamin1989'>
            <img className='social-fb' title="Facebook" alt="Facebook" src="./css/img/icons/facebook-square.svg" />
          </a>
          <a href='https://www.linkedin.com/in/kenneth-kier-09260282'>
            <img className='social-li'title="LinkedIn" alt="LinkedIn" src="./css/img/icons/linkedin.svg" />
          </a>
        </div>
      </main>
    )
  }
})

module.exports = Contact
