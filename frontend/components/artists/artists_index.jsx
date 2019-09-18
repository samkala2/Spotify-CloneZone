import React from 'react';


class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {name: ""};

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
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

          <div className="search-results">   

            <div className="artists-result">  
            <p> Artist Results: </p>

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

         
            <div className="albums-result">  
              <p> Albums Results: </p>

                <ul> 
              {this.props.albums.map(album => 
                <li> {album.name} </li> )}
                </ul>

            </div>

            <div className="songs-result">
              <p> Songs Results: </p>

              <ul>  
              {this.props.songs.map(song => 
                <li> 
                  <audio src={song.songUrl} controls/> 
                  {song.title} 
                </li> )}
              </ul>
              </div>
             


            <div className="playlists-result">
              <p> Playlist Results: </p>

              <ul> 
              {this.props.playlists.map(playlist =>
                <li> {playlist.name} </li>)}
              </ul>

            </div>

          </div>

      </div>

    </div> )}

  }

}


export default Artists;
