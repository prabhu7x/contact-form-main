import tick_mark from '../assets/images/icon-success-check.svg'

function SuccessComp() {
  return (
    <div id="submitted-popup">
      <div className="popup-content">
        <h1>
          <img src={tick_mark} alt="tick mark" />
          Message Sent!
        </h1>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
      </div>
    </div>
  );
}

export default SuccessComp