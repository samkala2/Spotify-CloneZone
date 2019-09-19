import React from 'react';
import SongPlayer from '../../components/song_player/song_player';

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = { 
      name: "",
      songUrl: "https://craftifybucket.s3.us-east-2.amazonaws.com/1.mp3",
      songTitle: "Stan",
      songArtist: "Eminem",

      filters: {TopResults: true,
      ArtistsResults: false,
      SongsResults: false,
      AlbumsResults: false,
      PlaylistsResults: false
      }
    };

    this.toggleResults = this.toggleResults.bind(this)
    // this.componentDidMount();
  }

  // componentDidMount() {
  //   this.props.receiveCurrentSong(1, "https://craftifybucket.s3.us-east-2.amazonaws.com/1.mp3", "Eminem", "Stan")
  // }


  toggleResults(filter) {
    const resetedFilters = {
      TopResults: false,
      ArtistsResults: false,
      SongsResults: false,
      AlbumsResults: false,
      PlaylistsResults: false
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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  playSongios(song) {
    // document.getElementsByClassName(`${song.id}`)[0].play();
    this.setState({
      songUrl: song.songUrl,
      songTitle: song.title,
      songArtist: song.artist
    });
   let songGet= document.getElementsByClassName('audio-footer')[0];
    songGet.autoplay = true;
    songGet.play();

    this.props.receiveCurrentSong(song.id, song.songUrl, song.artist, song.title)
  }


  handleSearch(e) {
    e.preventDefault()
    // debugger
    this.props.search(this.state.name)

    this.props.searchAlbum(this.state.name)

    this.props.searchSongs(this.state.name)

    this.props.searchPlaylists(this.state.name)

  }


  render() {
    const {
      TopResults,
      ArtistsResults,
      SongsResults,
      AlbumsResults,
      PlaylistsResults
    } = this.state.filters

    // debugger;
    if (!this.props.artists) {
      return (<div> Loading... 

        <div className="search-bar">

          <div className="searchform-container">

            <form onSubmit={this.handleSearch} className="search-form">

              <label>
                <input type="text"
                  placeholder="Start Typing..."
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
                          placeholder="Start Typing..."
                          onChange = {this.update('name')} 
                          value = {this.state.name}/>
                  </label>

                  {/* <input type="submit" value="Search"/> */}
          </form>


          <div className="result-links-container">
            {
              Object.keys(this.state.filters).map(filter =>
                <span className="result-links" onClick={this.toggleResults(filter)}> {filter} </span>
              )
            }
          </div>


          <div className="search-results">   
            
            {
              TopResults && <div className="songs-result">

                <ul>
                  {this.props.songs.map(song =>
                    <li >
                      <i onClick={() => { this.playSongios(song) }} id={song.id} className="icon ion-md-play"></i>
                      {song.title}
                    </li>)}
                </ul>


              </div>
            }

            {
              ArtistsResults && <div className="artists-result">
                <p> Artist Results: </p>
                <p> </p>

                <ul>
                  {
                    this.props.artists.map(artist =>
                      <li>
                        <img className="artist-photo" src={artist.photoUrl} />

                        {artist.name}


                      </li>


                    )}

                </ul>

              </div>
            }
 
            {
              AlbumsResults && <div className="albums-result">
                <p> Albums Results: </p>

                <ul>
                  {this.props.albums.map(album =>
                    <li> {album.name} </li>)}
                </ul>

              </div>
            }
         
            {
              SongsResults && <div className="songs-result">
                <p> Songs Results: </p>

                <ul>
                  {this.props.songs.map(song =>
                    <li >
                      <i onClick={() => { this.playSongios(song) }} id={song.id} className="icon ion-md-play"></i>


                      {/* <audio src={song.songUrl} className={song.id} controls/>  */}
                      {song.title}
                    </li>)}

                </ul>


              </div>
            }

            {
              PlaylistsResults &&
              <div className="playlists-result">
                <p> Playlist Results: </p>

                <ul>
                  {this.props.playlists.map(playlist =>
                    <li> {playlist.name} </li>)}
                </ul>

              </div>
            }
              



         </div>

      </div>


          {/* <div>
              <SongPlayer songArtist={this.state.songArtist} songTitle={this.state.songTitle}  songUrl={this.state.songUrl}/>  
          </div> */}
    </div> )}

  }

}


export default Artists;
