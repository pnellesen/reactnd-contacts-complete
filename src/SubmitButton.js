import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const SubmitButton = (props) => (
   <Link to={'/' + props.sendTo} className={props.buttonClass}>{props.buttonText || 'Submit'}</Link>
)
export default SubmitButton;

SubmitButton.propTypes = {
  	disabled: PropTypes.bool,
    buttonText: PropTypes.string
}   