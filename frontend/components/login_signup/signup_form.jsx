import React from 'react';
import {Link} from 'react-router-dom'
import { loginThunk } from '../../actions/session_actions'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleDemo = this.handleDemo.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleDemo(e){
    let user={username:'sam11', password:'111333'}
    e.preventDefault();
    window.dispatch(loginThunk(user))
      .then(() => this.props.history.push('/'))
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push('/'));
    //() => this.props.history.push('/')
    //Why when logout, current user is still there in state??
  }



  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {

    return (
      <div className="signup-access-div">

        <div className="header-login">
          
          <Link to="/" className="header-logoo"> 
            <img id='logo-login-header' src='https://png2.cleanpng.com/sh/f6213f3ba38e90aa299c5998bf0e12db/L0KzQYm3VcEyN5Z0j5H0aYP2gLBuTfRme5x5hAI2d3HvfMHokPVzNZR0heJAdHX1PbrqjB50NZ10f9G2bXBme8b3TcVibmY6SaQBMUjoQYS3Tsg0PGQ5S6g8MUW1RoG5VsU0PGI1Sas3cH7q/kisspng-desktop-wallpaper-computer-icons-logo-mockup-5af5512618e130.8343436315260265341019.png' />
            <span className="header-logo-login"> Kalify  </span> </Link>
        </div>

        <div className="demologin-div">
          <a onClick={this.handleDemo} className="btn btn-demo"> DEMO LOGIN</a>
        </div>


        <form className="login-form-actual" onSubmit={this.handleSubmit}>



          <div className="divider">
            <span className="divider-line">  </span>
            <div className="or-divider">
              <strong className="or-divider-title"> OR </strong>
            </div>
            <span className="divider-line"> </span>
            <br />
          </div>
          <p className="to-continue-login"> Sign up with your email address </p> 


           <br />

          <label>
            <input type="text"
              className="signup-input"
              onChange={this.update('email')}
              value={this.state.email}
              placeholder="Email"
            // why the vlalue is like this??
            />
          </label>

            <label>
            <input type="text"
                className="signup-input"
                onChange={this.update('username')}
                value={this.state.username}
                placeholder="Username"
              // why the vlalue is like this??
              />
            </label>

            

    
            <label>
            <input type="password"
                className="signup-input"
                onChange={this.update('password')}
                value={this.state.password}
                placeholder="Password"
              />
            </label>
            <br />

            <input type="submit" className="session-submit" value={this.props.formType} />
        
        </form>

        <div className="login-footer">

          <span className="already-have-account">Already have an account?</span>

          <Link className="login-link" to="/login">Log in</Link>

        </div>


      </div>
    )
  }

}

export default SignupForm;