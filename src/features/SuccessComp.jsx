import React from 'react'
import successIcon from '../assets/images/icon-success-check.svg'

function SuccessComp() {
  return (
    <div className="submitted-popup">
      <div>
        <h1>
          <img src={successIcon} alt="confirmed image" />
          Message Sent!
        </h1>
        <p>Thanks for completing the form.We'll be in touch soon!</p>
      </div>
    </div>
  );
}

export default SuccessComp