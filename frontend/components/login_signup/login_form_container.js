import React from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import LoginSessionForm from './login_session_form';

import { loginThunk } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'login',
  navLink: <Link to="/signup">sign up</Link>

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(loginThunk(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginSessionForm);