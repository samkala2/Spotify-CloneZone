import React from 'react';
import {Link} from 'react-router-dom'

class LoginSessionForm extends React.Component {
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

  handleDemo(e) {
    let user = { username: 'sam11', password: '111333' }
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
      <div className="login-page-div">
        
        
        <div className="header-login"> 
          <Link to="/" className="header-logoo">
            <img id='logo-login-header' src='https://community.spotify.com/t5/image/serverpage/image-id/28936i76F1ECE491E76C35/image-size/small?v=mpbl-1&px=-1' />
            <span className="header-logo-login" > Kalify  </span>  </Link>
        </div>
          
        <div className="demologin-div">
          <p className="to-continue-login"> To continue, log in to Spotify. </p> 
          <a onClick={this.handleDemo}  className="btn btn-demo"> DEMO LOGIN</a>
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
           
          <div className="form-inputnsubmit">  
           
                <br/>

                <label>
                  <input type="text"
                        className="login-input"
                        onChange={this.update('username')}
                        value={this.state.username}
                        placeholder="Email address or username" 
                      // why the vlalue is like this??
                  />
                </label>

                <label>
                  <input type="password"
                        className="login-input"
                        onChange={this.update('password')}
                        value={this.state.password}
                        placeholder="Password"
                  />
                </label>
                
                {/* <input className="remember-me" type="checkbox" /> Remember me */}
                <input type="submit" className="session-submit" value={this.props.formType} />
                



            <div className="form-divider">

            </div>
            </div>


        </form>

       

        <div className="signup-footer">

          <p className="dont-have-account">Don't have an account?</p>

          <Link className="signup-link" to="/signup">SIGN UP FOR KALIFY</Link>

        </div>
          
      </div>
    )
  }

}

export default LoginSessionForm;