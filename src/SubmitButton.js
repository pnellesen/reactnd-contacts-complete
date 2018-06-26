import React from 'react';
import PropTypes from 'prop-types';
const SubmitButton = (props) => (
   <a href='#submit' onClick={props.onClick ? props.onClick : null} className={props.buttonClass}>{props.buttonText || 'Submit'}</a>
)
export default SubmitButton;

SubmitButton.propTypes = {
  	disabled: PropTypes.bool,
    buttonText: PropTypes.string
}   