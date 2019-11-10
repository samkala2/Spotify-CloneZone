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
    this.renderErrors

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

    if (this.props.errors.length > 0){
      let errorCont = document.getElementsByClassName("ErrorLogin");
      errorCont.classList.add("orange-back")
    } else {
      let errorCont = document.getElementsByClassName("ErrorLogin");
      errorCont.classList.remove("orange-back")
    }
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <p key={`error-${i}`}>
            {error}
          </p>
        ))}
      </ul>
    );
  }


  render() {

    return (
      <div className="signup-access-div">

        <div className="header-login">
          
          <Link to="/" className="header-logoo"> 
            <img id='logo-login-header' src='https://community.spotify.com/t5/image/serverpage/image-id/28936i76F1ECE491E76C35/image-size/small?v=mpbl-1&px=-1' />
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
              <div className="ErrorLogin"> 
                {this.renderErrors()}
              </div> 

              
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