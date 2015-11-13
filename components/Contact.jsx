var React = require('react')

var Contact = React.createClass({
  render: function () {
    return (
      <main>
        <div className='social'>
          <a href='https://www.facebook.com/KenJamin1989'>
            <img className='social-img' title="Facebook" alt="Facebook" src="./style/img/icons/facebook-square.svg" />
          </a>
          <a href='https://www.linkedin.com/in/kenneth-kier-09260282'>
            <img className='social-img'title="LinkedIn" alt="LinkedIn" src="./style/img/icons/linkedin.svg" />
          </a>
          <a href='https://github.com/Kennethjk3'>
            <img className='social-img' title="Github" alt="Github" src="./style/img/icons/github.svg" />
          </a>
          <a href='https://www.gmail.com/KenJamin1989'>
            <img className='social-img' title="Gmail" alt="Gmail" src="./style/img/icons/googleplus-square.svg" />
          </a>
        </div>
      </main>
    )
  }
})

module.exports = Contact
