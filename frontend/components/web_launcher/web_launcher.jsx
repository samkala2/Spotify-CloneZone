import React from 'react';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import SearchContainer from '../artists/artists_container'
import SideBar from '../sidebar_launcher/sidebar_launcher';
import SongPlayer from '../song_player/song_player';
import WebLauncherHome from './web_launcher_midhome';

class WebLauncher extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      songs: {},
      albums: {},
      playlists: {},
      artists: {}
    }
  }



  render(){
    return(
      <div className="main-weblauncher">
        <div className="flex-box">  
          <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet"/>


          <SideBar />


          <div className="middle-home">
            
            <Route path="/weblauncher/search" component={SearchContainer} />

            <Route path="/weblauncher/home" component={WebLauncherHome}/>
           
            {/* <SearchContainer /> */}

          </div>

        </div> 

            <SongPlayer />

      </div>
    )
  }
}

export default WebLauncher;