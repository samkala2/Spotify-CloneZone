import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo(e) {
    let user = { username: 'sam11', password: '111333' }
    e.preventDefault();
    window.dispatch(loginThunk(user))
      .then(() => this.props.history.push('/'))
  }

  render() {
    

    if (this.props.currentUser === undefined) {
    
      return (
        <div className='all-main-page-notloggedin'>        

          <div  className="middle-header col-1" id="top-header"> 

            <div className="logo-only">  
              <img id='logo' src='https://community.spotify.com/t5/image/serverpage/image-id/28936i76F1ECE491E76C35/image-size/small?v=mpbl-1&px=-1' />
              <section className="header-logo-word"> Craftify </section> 
            </div> 

              <Link className="btnsignup" to="/signup">Sign Up </Link>
              <Link className="btnlogin" to="/login">Log In </Link>
            
          </div>



          <div className="welcome-content">
            <h1> Music for everyone.</h1>
            <h4>Millions of songs. No credit card needed.</h4>
            <a onClick={this.handleDemo} className="trial-button">
              Demo Login
                  </a>
          </div>

         

        </div>  )

    } else {
      return (<div className='all-main-page-loggedin'>


        <div  className="middle-header  col-1" id="top-header">

          <img id='logo' src='https://community.spotify.com/t5/image/serverpage/image-id/28936i76F1ECE491E76C35/image-size/small?v=mpbl-1&px=-1' />
          <span className="header-logo-word"> Kalify </span>

          <img className="profile-image" src="data:image/jpeg;base64,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"/> 
          <span className="logout-button" onClick={this.props.logout}>   Logout   </span>

        </div>


        <div className="welcome-content">
          <h1> Listen to Music. Be Happy</h1>
        </div>


        <div className="footer-to-weblaunch"> 


          <p className="looking-formusic">Looking for music?</p>
          <p className="pickup-whereleft">Pick up your recently played right where you left off.</p>

          <Link className="launch-button" to="/weblauncher/home">LAUNCH WEB PLAYER</Link>
        
        </div>


      </div>

      )
    }
  }
}

export default Greeting;
