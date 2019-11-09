import React from 'react';
import { Link } from 'react-router-dom';

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
        AllAlbums: true,
      }
    };

  }

  componentDidMount(){
    this.props.getAllAlbums(); 
    this.props.getAllSongs();
    this.props.getAllArtists();

    
    this.props.zeroSongsAlbum();
    this.props.zeroSongsArtist();
    
  }

  highlightTitle(filter){
    let songsButton = document.getElementsByClassName("songsb")[0];
    let albumsButton = document.getElementsByClassName("albumsb")[0];
    let artistsButton = document.getElementsByClassName("artistsb")[0];

    if (songsButton && albumsButton && artistsButton) {

      
      if (filter=== 'AllArtists') {
        albumsButton.classList.remove("white-on")
        artistsButton.classList.add("white-on")
        songsButton.classList.remove("white-on")
      } 
      else if (filter === 'AllSongs'){
        albumsButton.classList.remove("white-on")
        artistsButton.classList.remove("white-on")
        songsButton.classList.add("white-on")
        
      } else if (filter === 'AllAlbums') {
        albumsButton.classList.add("white-on")
        artistsButton.classList.remove("white-on")
        songsButton.classList.remove("white-on")
      }
    }

  }

  toggleResults(filter) {
    const resetedFilters = {
      AllSongs: false,
      AllArtists: false,
      AllAlbums: false,
    }
    // debugger;

    this.highlightTitle(filter)

    setTimeout(() => {
    this.setState({filters: resetedFilters}, () => {
      this.setState({filters: {
        ...this.state.filters,
        [filter]: true
      }})
    })},100
    )
      // console.log(this.state.filters)
    
   
  }


  displayPlayButton(song){
    let playButton = document.getElementById(song.id.toString())
    playButton.classList.remove("display-n")
  }

  hidePlayButton(song){
    let playButton = document.getElementById(song.id.toString())
    playButton.classList.add("display-n")
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
    let albumsButton = document.getElementsByClassName("albumsb")[0];
    albumsButton.classList.remove("opacity")
  }

  goToArtistPage(artistId){
    this.props.receiveArtistSong(artistId)
  }


  handlePlayHover(id) {
    let imageSong = document.getElementsByClassName(id.toString())[0];
    imageSong.classList.add("cover-background")
  }


  handlePlayMouseOut(id) {
    let imageSong = document.getElementsByClassName(id.toString())[0];
    imageSong.classList.remove("cover-background") 
  }

  render() {
    const {AllSongs, 
      AllArtists, 
      AllAlbums} = this.state.filters;


    window.albumstate = this.state.filters;
    // debugger;
    return(


    <div className="mid-home-cont">  
        <div className="upper-links">
          <span className="opacity albumsb white-on" onClick={ () => this.toggleResults("AllAlbums") }> ALBUMS </span>
          <span className="opacity artistsb" onClick= { () => this.toggleResults("AllArtists")} > ARTISTS </span>
          <span className="opacity songsb" onClick={  () => this.toggleResults("AllSongs")} > SONGS </span>
        </div>


      <div className="all-songs-cont"> 
        {AllSongs && <div className="all-songs-results">
            {
              (this.props.songs.length > 0) && <div> 

              <h3> Songs </h3>
              <ul className="all-songs">
                {this.props.songs.slice(0).reverse().map(song =>
                  <li 
                  onMouseEnter={() => this.displayPlayButton(song)}  
                      onMouseLeave ={ () => this.hidePlayButton(song)}
                      id="each-song-opacity" 
                      className={"each-song-res" } 
                  >
                   
                  <img id={song.id} onMouseEnter = {() => this.handlePlayHover(song.id)}
                                    onMouseLeave = { () => this.handlePlayMouseOut(song.id)} 
                                    onClick={() => { this.playSongios(song) }} 
                                    className={"play-button-2" + " " +  "display-n" } 
                                    src="https://craftifybucket.s3.us-east-2.amazonaws.com/play_white.png"
                  /> 

                  <img  className={"image-song" + " " + song.id + " " + "overlay" + " " + "gray"} src={song.songImageUrl} />

                  <div className="song-info-allsongs">
                    <span className="song-title">  {song.title}      </span>
                    <span className="song-artist">  {song.artist}    </span>
                  </div>

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
                <Link className="" to={`/weblauncher/${album.id}/albumsongs`}>  
                  <img className="image-album" src={album.albumImageUrl} />
                </Link>
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


        <div className="all-artists-cont">

        {
            AllArtists && <div className="all-artists-result artists-result">
              

           { (this.props.artists.length > 0) &&  <div>
                <h3> Artists </h3>

                <ul>
                  {
                    this.props.artists.map(artist =>
                      <li>
                      <Link onClick={() => this.goToArtistPage(artist.id)} className="" to={`/weblauncher/${artist.id}/songs`}>  
                        <img className="artist-photo" src={artist.photoUrl} />
                      </Link>
                        <span className="artist-name">  {artist.name}  </span>
                      </li>
                    )}

                </ul>

              </div> }

            </div>
        }
        </div>
      </div>



     
    );
  }
};

export default WebLauncherHome;