import React from 'react'
import {Link} from 'react-router-dom';



class SideBar extends React.Component {

  render () {
    return (


      <div className="side-bar">
        <div className="logo">
          <Link className="link-home" to="/weblauncher/search">
            <img id='sidebar-logo' src="https://community.spotify.com/t5/image/serverpage/image-id/28936i76F1ECE491E76C35/image-size/small?v=mpbl-1&px=-1" />
            <section className="sidebar-logoword" href=""> Kalify </section>
          </Link>
        </div>


        <div id="bar-link">
          <ul>
            <p className="home-link">

              <i id="iconhome" className="icon ion-md-home"></i>
              <Link to="/weblauncher/home"  className="iconlink" > Home </Link>

            </p>

            <p className="search-link">
              <i id="iconhome" className="icon ion-md-search"></i>
              <Link to="/weblauncher/search"  className="iconlink"> Search </Link>
            </p>

            <p className="library-link">
              <i id="iconhome" className="icon ion-md-list"></i>
              <Link to="/weblauncher/home"  className="iconlink"> library </Link>
            </p>

          </ul>
        </div>


        <div className="playlist">
          <div className="playlist-content">
            <p>PLAYLISTS</p>
            <section className="create-playlist">
              <span> + </span>
              <span className="create-but-text">Create Playlist</span>
            </section>

            <ul className="playlist-items">
        

            </ul>
          </div>
        </div>


        <div className="sidebar-footer">
          <li> <Link to="/weblauncher"> Install App</Link> </li>

        </div>

      </div>



    )
  }
}

export default SideBar;