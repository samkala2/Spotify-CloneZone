import React from 'react'
import {Link} from 'react-router-dom';



class SideBar extends React.Component {

  constructor(props) {
    super(props)
    this.showPlaylistForm = this.showPlaylistForm.bind(this);
    this.hidePlaylistForm = this.hidePlaylistForm.bind(this); 
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
    this.state = {
      name: "",
      user_id: this.props.userId[0].id || 0
    }
  }

  logout(){
    this.props.logout()
    setTimeout( () => document.getElementsByClassName("link-home")[0].click(), 1)
  }

  componentDidMount(){
    // debugger;
    this.props.getUserPlaylists(this.props.userId[0].id);
  }

  showPlaylistForm(){
    let form = document.getElementsByClassName("create-playlist-form")[0];
    form.classList.remove("hidden");
  }

  hidePlaylistForm(){
    let form = document.getElementsByClassName("create-playlist-form")[0];
    form.classList.add("hidden");
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(){
    const playlist = Object.assign({}, this.state);
    // debugger;
    this.props.createPlaylist(playlist)
    .then(() => this.props.getUserPlaylists(this.props.userId[0].id))
    .then(() => this.hidePlaylistForm())
    .then(() => this.props.history.push('/weblauncher/home'))
  }
  render () {
    return (


      <div className="side-bar">
        <div className="logo">
          <Link className="link-home" to="/">
            <img id='sidebar-logo' src="https://community.spotify.com/t5/image/serverpage/image-id/28936i76F1ECE491E76C35/image-size/small?v=mpbl-1&px=-1" />
            <div className="sidebar-logoword" href=""> Craftify </div>
          </Link>
        </div>


        <div id="bar-link">
          <ul>
            <p className="home-link">

              <img className="home-button" src="https://craftifybucket.s3.us-east-2.amazonaws.com/home.png"/> 
              <Link to="/weblauncher/home"  className="iconlink home-word" > Home </Link>

            </p>

            <p className="search-link">

              <i id="iconhome" className="icon ion-md-search"></i>
              
              <Link to="/weblauncher/search"  className="iconlink"> Search </Link>
            </p>

            <p className="library-link">
              <i id="iconhome" className="icon ion-md-list"></i>
              <Link to="/weblauncher/library"  className="iconlink"> Library </Link>
            </p>

          </ul>
        </div>

        <p className="playlist-title"> PLAYLISTS </p>

        <div className="create-playlist-cont"   onClick={() => this.showPlaylistForm()}> 
          <img className="plus-icon"
          src="https://craftifybucket.s3.us-east-2.amazonaws.com/addplaylist.png"/> 
          <p className="create-playlist"> Create Playlist  </p>
        </div>

        <div className="create-playlist-form hidden" >
          <h4 className="top-placeholder"> Playlist Name</h4>
          <button onClick={() => this.handleSubmit()}
          type="submit" className="submit-playlist" > Create </button>
          <input type="text" className="input-playlist" 
                  placeholder="New Playlist"
                  onChange={this.update('name')}
                  />
          <button onClick={() => this.hidePlaylistForm()} className="cancel-playlist"> Cancel </button>
        </div>


        <ul className="playlist-list">
         {this.props.playlists.map(playlist => {
           return(
             <li> 
             <Link to={`/weblauncher/playlist/${playlist.id}`}> 
             {playlist.name} </Link>
             </li>
           )
         })}
        </ul>

       
        

        <div>
          <p className="logout-sidebar" onClick={() => this.logout()}> Logout</p>
        </div>

        <div className="playlist">
          <div className="playlist-content">
            {/* <p>PLAYLISTS</p>
            <section className="create-playlist">
              <span> + </span>
              <span className="create-but-text">Create Playlist</span>
            </section> */}

            <ul className="playlist-items">
        

            </ul>
          </div>
        </div>


        <div className="sidebar-footer">
          {/* <li> <Link to="/weblauncher"> Install App</Link> </li> */}

        </div>

      </div>



    )
  }
}

export default SideBar;