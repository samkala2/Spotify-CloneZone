import React from 'react';

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

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
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
      <div className="form-access-div">
        <form className="form-actual" onSubmit={this.handleSubmit}>
          Welcome to PARK bnb
      <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <br />

            <label>Username:
            <input type="text"
                className="login-input"
                onChange={this.update('username')}
                value={this.state.username}
              // why the vlalue is like this??
              />
            </label>

            <label>Email:
            <input type="text"
                className="login-input"
                onChange={this.update('email')}
                value={this.state.email}
              // why the vlalue is like this??
              />
            </label>

            <br />
            <label>password:
            <input type="password"
                className="login-input"
                onChange={this.update('password')}
                value={this.state.password}
              />
            </label>
            <br />

            <input type="submit" className="session-submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    )
  }

}

export default SignupForm;