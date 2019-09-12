import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    

    if (this.props.currentUser === undefined) {
     
      return (
        <div className='all-main-page-notloggedin'>

           <img id='background-img' src="https://images.pexels.com/photos/2457317/pexels-photo-2457317.png?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
        

          <div className="middle-header" id="top-header"> 
            
              <img id='logo' src='https://png2.cleanpng.com/sh/f6213f3ba38e90aa299c5998bf0e12db/L0KzQYm3VcEyN5Z0j5H0aYP2gLBuTfRme5x5hAI2d3HvfMHokPVzNZR0heJAdHX1PbrqjB50NZ10f9G2bXBme8b3TcVibmY6SaQBMUjoQYS3Tsg0PGQ5S6g8MUW1RoG5VsU0PGI1Sas3cH7q/kisspng-desktop-wallpaper-computer-icons-logo-mockup-5af5512618e130.8343436315260265341019.png' />
              <span className="header-logo"> Kalify </span> 
              <Link className="btnlogin" to="/signup">Sign Up </Link>
              <Link className="btnsignup" to="/login">Log In </Link>
            
         </div>



          <div className="welcome-content">
            <h1> Music for everyone.</h1>
            <h4>Millions of songs. No credit card needed.</h4>
            <a href="" className="trial-button">
              Demo Login
                  </a>
          </div>

         

        </div>  )

    } else {
      return (<div>
        <h1 className="greetingyes"> Welcome to Craftify {this.props.currentUser.username} </h1>

        <button onClick={this.props.logout}>   Logout   </button>

      </div>

      )
    }
  }
}

export default Greeting;
