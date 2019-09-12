import { connect } from 'react-redux';
import Greeting from './greeting';
import { logoutThunk } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUser]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutThunk()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Greeting);