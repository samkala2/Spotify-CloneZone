import React from 'react';

class WebLauncherHome extends React.Component {


  constructor(props){
    super(props);
    this.handleSongs = this.handleSongs.bind(this);
    this.toggleResults = this.toggleResults.bind(this);
    this.state = {
      name: "",
      songUrl: "https://craftifybucket.s3.us-east-2.amazonaws.com/1.mp3",
      songTitle: "Stan",
      songArtist: "Eminem",

      filters: {
        AllSongs: true,
        AllArtists: false,
        AllAlbums: false,
      }
    };

  }

  toggleResults(filter) {
    const resetedFilters = {
      AllSongs: true,
      AllArtists: false,
      AllAlbums: false,
    }

    return () => {
      this.setState({ filters: resetedFilters }, () => {
        this.setState({
          filters: {
            ...this.state.filters,
            [filter]: true
          }
        })
      })
    }
  }


  playSongios(song) {

    this.setState({
      songUrl: song.songUrl,
      songTitle: song.title,
      songArtist: song.artist
    });
    
    let songGet = document.getElementsByClassName('audio-footer')[0];
    songGet.autoplay = true;
    songGet.play();

    this.props.receiveCurrentSong(song.id, song.songUrl, song.artist, song.title, song.songImageUrl)
  }


  handleSongs(e) {
    e.preventDefault();
    this.props.getAllSongs();  //This updates the outer state
  }


  render() {
    return(
      <div>  
        <div className="upper-links">
          <span onClick={this.handleSongs} > SONGS </span>
          <span> ALBUMS </span>
          <span> ARTISTS </span>
        </div>


        <div className="for-who">
          Made For You
        </div>


         <div className="all-songs-results">
           {/* Hiiii check them */}
            {
              (this.props.songs.length > 0) && <div> 

              <ul>
                {this.props.songs.map(song =>
                  <li >
                    <i onClick={() => { this.playSongios(song) }} id={song.id} className="icon ion-md-play"></i>

                    <span className="song-info">
                      <span className="song-title">  {song.title}
                      </span>

                      <span className="song-artist">  {song.artist}
                      </span>
                    </span>

                  </li>)}
              </ul>

              </div>
            }
         </div>


      </div>



     
    );
  }
};

export default WebLauncherHome;