import React from "react";
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_signup/login_form_container';
import SignupFormContainer from './login_signup/signup_form_container';
import SearchContainer from './artists/artists_container';
import WebLauncherContainer from './web_launcher/web_launcher_container';
import ArtistSongsContainer from "./artists/artist_songs_container"


import { AuthRoute, ProtectedRoute } from '../util/route_util';

// import WebLauncher from '../components/web_launcher/web_launcher';
const App = () => (
  <div className='app-div'>
    {/* <h1>Message from App Component that is placed in Root Component</h1> */}
 
    <Route exact path="/" component={GreetingContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/weblauncher" component={WebLauncherContainer}/>
    
    {/* <Route exact path="/" component={SearchContainer} /> */}

  </div>
);

export default App;