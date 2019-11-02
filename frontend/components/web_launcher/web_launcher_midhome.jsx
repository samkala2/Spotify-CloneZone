import React from 'react';

class WebLauncherHome extends React.Component {


  constructor(props){
    super(props);
    this.handleSongs = this.handleSongs.bind(this);
    this.handleAlbums = this.handleAlbums.bind(this);
    this.toggleResults = this.toggleResults.bind(this);
    this.state = {
      name: "",
      songUrl: "https://craftifybucket.s3.us-east-2.amazonaws.com/1.mp3",
      songTitle: "Stan",
      songArtist: "Eminem",

      filters: {
        AllSongs: false,
        AllArtists: false,
        AllAlbums: false,
      }
    };

  }

  componentDidMount(){
    this.props.getAllAlbums(); 
    this.props.getAllSongs();
  }

  toggleResults(filter) {
    const resetedFilters = {
      AllSongs: false,
      AllArtists: false,
      AllAlbums: false,
    }

    return () => {
      this.setState({filters: resetedFilters}, () => {
        this.setState({filters: {
          ...this.state.filters,
          [filter]: true
        }})
      })
    }
   
  }


  SetStateHoveredSong(song){
    let playButton = document.getElementById(song.id.toString())
    playButton.classList.remove("display-n")
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


  handleSongs() {
    let songsbutton = document.getElementsByClassName("songsb")[0];
    songsbutton.classList.remove("opacity")
    
  }

  handleAlbums() {
    this.toggleResults("AllAlbums")
    debugger
    let albumsButton = document.getElementsByClassName("albumsb")[0];
    albumsButton.classList.remove("opacity")
  }



  render() {
    const {AllSongs, 
      AllArtists, 
      AllAlbums} = this.state.filters;


    window.albumstate = this.state.filters;
    return(


    <div className="mid-home-cont">  
        <div className="upper-links">
          <span className="opacity songsb" onClick={this.toggleResults("AllSongs")} > SONGS </span>
          <span className="opacity albumsb" onClick={this.toggleResults("AllAlbums")}> ALBUMS </span>
          <span className="opacity artistsb" > ARTISTS </span>
        </div>


      <div className="all-songs-cont"> 
        {AllSongs && <div className="all-songs-results">
            {
              (this.props.songs.length > 0) && <div> 

              <h3> Top Songs </h3>
              <ul className="all-songs">
                {this.props.songs.slice(0).reverse().map(song =>
                  <li onMouseEnter={() => this.SetStateHoveredSong(song)}  id="each-song-opacity" className={"each-song-res" + song.id + " " + "overlay" + " " + "gray"} >
                    <i onClick={() => { this.playSongios(song) }} id={song.id} className="icon ion-md-play display-n"></i>
                    <img  className="image-song" src={song.songImageUrl} />

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
        </div>}
      </div>


        <div className="all-albums-cont">

         {
           AllAlbums && <div className="all-album-results">
            {
              (this.props.albums.length > 0) && <div> 

              <h3> Albums </h3>
              <ul className="all-albums">
                {this.props.albums.slice(0).reverse().map(album =>
                <li>
                  <img className="image-album" src={album.albumImageUrl} />
                  <div className="album-info">
                      <div className="album-title">  {album.name} </div>
                      <div className="album-artist">  {album.artistName} </div>
                  </div>

                  </li>)}
              </ul>

              </div>
            }
        </div>}
        </div> 

      </div>



     
    );
  }
};

export default WebLauncherHome;