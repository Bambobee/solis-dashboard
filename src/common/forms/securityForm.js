/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import ReCaptchaV2 from 'react-google-recaptcha';

function SecurityForm(props) {
  return (
    <div>
      <ReCaptchaV2
        sitekey={process.env.REACT_APP_SITE_KEY}
        onChange={props.update}
        onExpired={props.handleExpire}
      />
    </div>
  );
}

export default SecurityForm;
