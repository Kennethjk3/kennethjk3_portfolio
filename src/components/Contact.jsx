var React = require('react')

var Contact = React.createClass({
  render: function() {
    return (
      <main>
        <div className="contact">
          <div>
            <a href='https://github.com/Kennethjk3'>
              <img className='link-icon' title="Github" alt="Github" src="src/style/img/icons/github.svg"/>
            </a>
            <a href='https://www.linkedin.com/in/kenneth-kier-09260282'>
              <img className='link-icon' title="LinkedIn" alt="LinkedIn" src="src/style/img/icons/linkedin.svg"/>
            </a>
          </div>
          <div>
            <a href='https://www.facebook.com/KenJamin1989'>
              <img className='link-icon' title="Facebook" alt="Facebook" src="src/style/img/icons/facebook-square.svg"/>
            </a>
            <a href='mailto:kennethjk3@gmail.com'>
              <img className='link-icon' title="Gmail" alt="Gmail" src="src/style/img/icons/mail.svg"/>
            </a>
          </div>
        </div>
      </main>
    )
  }
})

module.exports = Contact
