import React from 'react';
import { Route } from 'react-router-dom';
// import { Suspense, lazy } from 'react';
// import {Link} from 'react-router-dom';
import SearchContainer from '../artists/artists_container'
// import LazySearchResults from '../artists/search_results_lazy';
import SideBar from '../sidebar_launcher/sidebar_launcher';
import SongPlayerContainer from '../song_player/song_player_container';
import WebLauncherHomeContainer from './web_laucher_homecontainer';
import ArtistSongsContainer from "../artists/artist_songs_container";
import AlbumSongsContainer from '../albums/album_songs_container';
import LazyMidHome from './web_launcher_lazy_home';



class WebLauncher extends React.Component {

  constructor(props) {
    super(props)
  }


  render(){
   
    if (!this.props) return (<div> Loading.. </div>)

    return(
      <div className="main-weblauncher">
        <div className="flex-box-featured-andsidebar">  
          <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet"/>


          <SideBar logout={this.props.logout}/>


          <div className="middle-home">
            
            <Route path="/weblauncher/search" component={SearchContainer} />

            <Route path="/weblauncher/home" component={WebLauncherHomeContainer }/>

            <Route path ="/weblauncher/:artistId/songs" component={ArtistSongsContainer}/>

            <Route path="/weblauncher/:albumId/albumsongs" component= {AlbumSongsContainer}/>

          </div>

        </div> 

        <div className="song-player-foot">
          <SongPlayerContainer songArtist={this.props.currentlyPlaying.artist} songTitle={this.props.currentlyPlaying.title} songUrl={this.props.currentlyPlaying.songUrl} 
          songImageUrl={this.props.currentlyPlaying.songImageUrl} />
        </div>

      </div>
    )
  }
}

export default WebLauncher;