import React from 'react'

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Where To Find Me!</h1>
      <div className="m-4 icon-container">
        <a id='yellow-icon' className="contact-icons" target="_blank" rel="noreferrer" href='https://github.com/jolizaro'>
          <i className="fab fa-github"></i>
        </a>
        <a className="contact-icons" target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/joliza-mateo/'>
          <i className="fab fa-linkedin"></i>
        </a>
        <a id='yellow-icon' className="contact-icons" target="_blank" rel="noreferrer" href='mailto: Jolizaro@gmail.com'>
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  )
}

export default Contact
