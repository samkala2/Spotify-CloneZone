import React from 'react';
import SongPlayer from '../../components/song_player/song_player';
import { Link } from 'react-router-dom';

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = { 
      name: "",
      songUrl: "https://craftifybucket.s3.us-east-2.amazonaws.com/1.mp3",
      songTitle: "Stan",
      songArtist: "Eminem",
      hoveredSongID: 0 ,

      filters: {TopResults: true,
      ArtistsResults: false,
      SongsResults: false,
      AlbumsResults: false,
      PlaylistsResults: false
      }
    };

    this.toggleResults = this.toggleResults.bind(this)
    this.handleHoverSong = this.handleHoverSong.bind(this);
    this.handleHoverOutSong = this.handleHoverOutSong.bind(this);

    this.goToArtistPage = this.goToArtistPage.bind(this);
  }


  highlightTitle(filter){
    let songsButton = document.getElementsByClassName("songs-res")[0];
    let albumsButton = document.getElementsByClassName("albums-res")[0];
    let artistsButton = document.getElementsByClassName("artists-res")[0];
    let topResButton = document.getElementsByClassName("top-res")[0];


    if (songsButton && albumsButton && artistsButton && topResButton) {

      
      if (filter=== 'ArtistsResults') {
        albumsButton.classList.remove("white-on")
        artistsButton.classList.add("white-on")
        songsButton.classList.remove("white-on")
        topResButton.classList.remove("white-on")
      } 
      else if (filter === 'SongsResults'){
        albumsButton.classList.remove("white-on")
        artistsButton.classList.remove("white-on")
        songsButton.classList.add("white-on")
        topResButton.classList.remove("white-on")

        
      } else if (filter === 'AlbumsResults') {
        albumsButton.classList.add("white-on")
        artistsButton.classList.remove("white-on")
        songsButton.classList.remove("white-on")
        topResButton.classList.remove("white-on")

      }
      else if (filter === 'TopResults') {
        albumsButton.classList.remove("white-on")
        artistsButton.classList.remove("white-on")
        songsButton.classList.remove("white-on")
        topResButton.classList.add("white-on")

      }
    }

  }


  toggleResults(filter) {
    const resetedFilters = {
      TopResults: false,
      ArtistsResults: false,
      SongsResults: false,
      AlbumsResults: false,
      PlaylistsResults: false
    }

    this.highlightTitle(filter)

      this.setState({filters: resetedFilters}, () => {
        this.setState({filters: {
          ...this.state.filters,
          [filter]: true
        }})
      })
    
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  playSongios(song) {
    this.setState({
      songUrl: song.songUrl,
      songTitle: song.title,
      songArtist: song.artist
    });
   let songGet= document.getElementsByClassName('audio-footer')[0];
    songGet.autoplay = true;
    songGet.play();

    let playbutton = document.getElementsByClassName("play-button")[0];

    if (playbutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/play_white.png") {   
    playbutton.src = "https://craftifybucket.s3.us-east-2.amazonaws.com/pause_white.png"
    } else if (playbutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/pause_white.png") {
    document.getElementsByClassName('audio-footer')[0].pause();
    playbutton.src = "https://craftifybucket.s3.us-east-2.amazonaws.com/play_white.png" 
    }

    this.props.receiveCurrentSong(song.id, song.songUrl, song.artist, song.title, song.songImageUrl)
  }


  handleHoverSong(song){
    let playButton = document.getElementById(song.id.toString())
    playButton.classList.remove("display-n")

    let musicNote = document.getElementsByClassName(song.id.toString())[0];
    musicNote.classList.add("display-n");
}


handleHoverOutSong(song){
    let playButton = document.getElementById(song.id.toString())
    playButton.classList.add("display-n")

    let musicNote = document.getElementsByClassName(song.id.toString())[0];
    musicNote.classList.remove("display-n");
}



displayPlayButton(song){
  let playButton = document.getElementById("big-play")
  playButton.classList.remove("display-n")
}

hidePlayButton(song){
  let playButton = document.getElementById("big-play")
  playButton.classList.add("display-n")
}


  goToArtistPage(artistId){
    this.props.receiveArtistSong(artistId)
  }

  // returnFirstFiveSongs(){
  //   let returnedArr = [];
  //   let ind = 0;
  //   // debugger
  //   if (this.props.songs.length > 0) { 
  //   while (ind < 5){
  //     let song = this.props.songs[ind];
  //     returnedArr.push(
  //       <li onMouseEnter={() => this.handleHoverSong(song)}  id="each-song-opacity" className={"each-song-res" + song.id + " " + "overlay" + " " + "gray"} >
  //                 <i onClick={() => { this.playSongios(song) }} id={song.id} className="icon ion-md-play display-n"></i>
                  
  //                 <img  className="small-image-song" src={song.songImageUrl} />
  //                   <div className="song-info"> 
  //                     <span className="song-title">  {song.title}   </span> 
  //                     <span className="song-artist">  {song.artist} </span> 
  //                   </div> 
  //                 </li>
  //     )
  //     ind += 1
  //   }
  // }
    
  //   return returnedArr;
  // }

  handleSearch(e) {
    e.preventDefault()
    
    this.props.search(this.state.name)

    this.props.searchAlbum(this.state.name)

    this.props.searchSongs(this.state.name)

    this.props.searchPlaylists(this.state.name)
    // debugger;
    let searchResults = document.getElementById("results-container")
    searchResults.classList.remove("display-results")

    let h3TopRes = document.getElementsByClassName("resultt-titles")
    // debugger;
    let i = 0;
    for (let i = 0; i < h3TopRes.length; i++) {
      h3TopRes[i].classList.remove("hidden-title")
    }
  }


  render() {
    // debugger;
    const {
      TopResults,
      ArtistsResults,
      SongsResults,
      AlbumsResults,
      PlaylistsResults
    } = this.state.filters

   
    if (!this.props.artists) {
      return (<div> Loading... 

        <div className="search-bar">

          <div className="searchform-container">

            <form onSubmit={this.handleSearch} className="search-form">

              <label>
                <input type="text"
                  placeholder="   Start Typing..."
                  className="search-input"
                  onChange={this.update('name')}
                  value={this.state.name} />
              </label>


            </form>

          </div>

        </div>
      </div>)

    } else {
    return (
    <div className="search-bar">

      <div className="searchform-container">

        <form onSubmit={this.handleSearch} className="search-form">

                <label>  
                  <input type="text" 
                        className="search-input"
                        placeholder="  Start Typing..."
                        onChange = {this.update('name')} 
                        value = {this.state.name}/>
                </label>

              
        </form>

        <div id="results-container" class="display-results"> 
          <div className="result-links-container ">

            <span className="result-links top-res white-on" onClick={() => this.toggleResults("TopResults")}> Top Results </span>
            <span className="result-links artists-res" onClick={() => this.toggleResults("ArtistsResults")}> Artists </span>
            <span className="result-links songs-res" onClick={() => this.toggleResults("SongsResults")}> Songs </span>
            <span className="result-links albums-res" onClick={() => this.toggleResults("AlbumsResults")}> Albums </span>

          </div>  
        </div>

        <div className="search-results">   
                    {/* Top Results */}
          {
            TopResults && <div className="TopResultsCont">

            <h4 className="hidden-title resultt-titles"> Songs </h4>
            <div className="songs-result">

              {
                (this.props.songs.length > 0) && <div className="flex-artist-image">

                <img id="big-play" 
                     
                     onClick={() => { this.playSongios(this.props.topsongs[0]) }} 
                     className={"play-button-3" + " "     } 
                     src="https://craftifybucket.s3.us-east-2.amazonaws.com/play_white.png"
                  /> 

                  <img className="main-image-song" 
                      //  onMouseEnter={() => this.displayPlayButton("big-play")}  
                      //  onMouseLeave ={ () => this.hidePlayButton("big-play")}
                       src={this.props.topsongs[0].songImageUrl} />

                  <p className="top-artist-song2"> {this.props.topsongs[0].title} </p>
                  <p className="top-artist-song"> {this.props.topsongs[0].artist} </p>

                </div>
              }


              <ul className="each-song-result-cont">
                {this.props.topsongs.map(song =>

                  <li onMouseEnter={() => this.handleHoverSong(song)}
                      onMouseLeave= {() => this.handleHoverOutSong(song)}  
                      id="each-song-result" 
                      className={"each-song-res" + song.id } 
                  >
                  <i onClick={() => { this.playSongios(song) }} id={song.id} className="icon ion-md-play display-n"></i>
                  
                  <img className= {"music-note" + " " +  song.id} src="https://craftifybucket.s3.us-east-2.amazonaws.com/music_note.png"/>

                  {/* <img  className="small-image-song" src={song.songImageUrl} /> */}
                    <div className="song-info-3"> 
                      <span className="song-title-3">  {song.title}   </span> 
                      <span className="song-artist-3">  {song.artist} </span> 
                    </div> 
                  </li>)}
              </ul>
              
            </div>


            <h4 className="hidden-title resultt-titles">  Artists </h4> 
            <div className="artists-result">
              <ul>
              {
                this.props.topArtists.map(artist =>
                  <li>
                  <Link onClick={() => this.goToArtistPage(artist.id)} className="" to={`/weblauncher/${artist.id}/songs`}>  
                  <img className="artist-photo" src={artist.photoUrl} />
                  </Link> 
                    
                    <span className="artist-name">  {artist.name}  </span>
                  </li>
              )}
              </ul>
            </div>




            <h4 className="hidden-title resultt-titles">  Albums </h4> 
            <ul className="album-ul">
                {this.props.topAlbums.map(album =>
                  <li> 
                  <div class="album-artist-cont"> 

                  <Link className="" to={`/weblauncher/${album.id}/albumsongs`}>  
                  <img className="album-photo" src={album.albumImageUrl} />
                  </Link> 
                  
                  <p> {album.name} </p> 
                  </div>
                  </li>)}
            </ul>
          </div>
            
          }




          {
            ArtistsResults && <div className="artists-result">
              
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

            </div>
          }

          {
            AlbumsResults && <div className="albums-result">
             
                <ul className="album-ul">
                  {this.props.albums.map(album =>
                    <li> 
                    <div class="album-artist-cont"> 

                    <Link className="" to={`/weblauncher/${album.id}/albumsongs`}>  
                    <img className="album-photo" src={album.albumImageUrl} />
                    </Link> 
                    
                    <p> {album.name} </p> 
                    </div>
                    </li>)}
                </ul>

              
            </div>
          }
        
          {
            SongsResults && <div className="TopResultsCont">
            
            <div className="songs-result">
              
              {
                (this.props.songs.length > 0) && <div className="flex-artist-image">  

                <img id="big-play" 
                     
                     onClick={() => { this.playSongios(this.props.songs[0]) }} 
                     className={"play-button-3" + " "     } 
                     src="https://craftifybucket.s3.us-east-2.amazonaws.com/play_white.png"
                  /> 



                    <img className="main-image-song" 
                    src={this.props.songs[0].songImageUrl} />
                  <p className="top-artist-song"> {this.props.songs[0].artist} </p>
                </div> 

              }

              <ul className="each-song-result-cont">
                {this.props.songs.map(song =>
                  <li onMouseEnter={() => this.handleHoverSong(song)} 
                      onMouseLeave= {() => this.handleHoverOutSong(song)}  
                      id="each-song-result" 
                      className={"each-song-res" + song.id} >
                    <i onClick={() => { this.playSongios(song) }} id={song.id} className="icon ion-md-play display-n"></i>
                    
                    <img className= {"music-note" + " " +  song.id} src="https://craftifybucket.s3.us-east-2.amazonaws.com/music_note.png"/>

                    {/* <img  className="small-image-song" src={song.songImageUrl} /> */}
                    <span className="song-info-3">
                      <span className="song-title-3">  {song.title} </span>
                      <span className="song-artist-3">  {song.artist} </span>
                    </span>
                  </li>)}
              </ul>
            </div>
            </div>
          }

          {
            PlaylistsResults &&
            <div className="playlists-result">
              {/* <p> Playlist Results: </p> */}
              <ul>
                {this.props.playlists.map(playlist =>
                  <li> {playlist.name} </li>)}
              </ul>
            </div>
          }
        </div>

      </div>
    </div> )}

  }

}


export default Artists;
