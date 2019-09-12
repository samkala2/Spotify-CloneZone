import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import SignupForm from './signup_form';

import { signupThunk } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup',
  navLink: <Link to="/login">log in instead</Link>
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(signupThunk(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);