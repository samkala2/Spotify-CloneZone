import React from 'react';
import {Link} from 'react-router-dom';

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

          <div className="side-bar">
            <div className="logo">
              <Link className="link-home" to="/"> 
              <img id='logo' src="https://png2.cleanpng.com/sh/f6213f3ba38e90aa299c5998bf0e12db/L0KzQYm3VcEyN5Z0j5H0aYP2gLBuTfRme5x5hAI2d3HvfMHokPVzNZR0heJAdHX1PbrqjB50NZ10f9G2bXBme8b3TcVibmY6SaQBMUjoQYS3Tsg0PGQ5S6g8MUW1RoG5VsU0PGI1Sas3cH7q/kisspng-desktop-wallpaper-computer-icons-logo-mockup-5af5512618e130.8343436315260265341019.png"/>
              <a className="header-logo" href=""> Kalify </a>
              </Link>
            </div>


            <div id="bar-link">
              <ul>
                <p className="home-link">

                  <i id="iconhome" className="icon ion-md-home"></i>
                  <a className="iconlink" > Home </a>

                </p>

                <p className="search-link">
                  <i id="iconhome" className="icon ion-md-search"></i>
                  <a className="iconlink" href=""> Search </a>
                </p>

                <p className="library-link">
                  <i id="iconhome" className="icon ion-md-list"></i>
                  <a className="iconlink" href=""> library </a>
                </p>

              </ul>
            </div>


            <div className="playlist">
              <div className="playlist-content">
                <p>PLAYLISTS</p>
                <button className="create-playlist">
                  <span> + </span> 
                  <span className="create-but-text">Create Playlist</span>
                </button>

                <ul className="playlist-items">
                  <li> <Link to="/weblauncher" className="playlist-item">classic</Link> </li>
                  <li> <Link to="/weblauncher" className="playlist-item">classic</Link> </li>
                  <li> <Link to="/weblauncher" className="playlist-item">classic</Link> </li>
                  <li> <Link to="/weblauncher" className="playlist-item">classic</Link> </li>
                  <li> <Link to="/weblauncher" className="playlist-item">classic</Link> </li>
                  <li> <Link to="/weblauncher" className="playlist-item">classic</Link> </li>
                  <li> <Link to="/weblauncher" className="playlist-item">classic</Link> </li>
                  <li> <Link to="/weblauncher" className="playlist-item">classic</Link> </li>
                  <li> <Link to="/weblauncher" className="playlist-item">classic</Link> </li>
                  <li> <Link to="/weblauncher" className="playlist-item">classic</Link> </li>
                  <li> <Link to="/weblauncher" className="playlist-item">classic</Link> </li>
                  <li> <Link to="/weblauncher" className="playlist-item">classic</Link> </li>
                  <li> <Link to="/weblauncher" className="playlist-item">classic</Link> </li>
                  

                 
                </ul>
              </div>
            </div>


            <div className="sidebar-footer">
              <li> <Link to="/weblauncher"> Install App</Link> </li>

            </div>

          </div>


          <div className="middle-home">

            <div className="upper-links">
              <span> FEATURED </span>
              <span>PODCAST </span>
              <span> CHART </span>
              <span>GENRE & MOODS</span>
              <span> NEW RELEAES</span>
              <span> DISCOVER </span>
            </div>

            <div className="for-who">
              Made for Brian Cho
            </div>

            <div className="mix-icons">

              <span className="mix-icon">
                <img src="https://www.demilked.com/magazine/wp-content/uploads/2019/02/5c66b23aa4f17-eminem-never-smile-photos-mike-brown-17-5c651ed32637e__605.jpg"/>
                  <p className="mix-title"> Daily Mix 1 </p>
                  <p className="mix-artists"> Eminem, JayZ, Nas </p>
              </span>

              <span className="mix-icon">
                <img src="http://i2.cdn.turner.com/cnn/dam/assets/140618171044-sia-beverly-hills-2014-story-top.jpg" />
                <p className="mix-title"> Daily Mix 2 </p>
                <p className="mix-artists"> Eminem, JayZ, Nas </p>
              </span>

              <span className="mix-icon">
                <img src="https://www.demilked.com/magazine/wp-content/uploads/2019/02/5c66b23aa4f17-eminem-never-smile-photos-mike-brown-17-5c651ed32637e__605.jpg" />
                <p className="mix-title"> Daily Mix 1 </p>
                <p className="mix-artists"> Eminem, JayZ, Nas </p>
              </span>

              <span className="mix-icon">
                <img src="http://i2.cdn.turner.com/cnn/dam/assets/140618171044-sia-beverly-hills-2014-story-top.jpg" />
                <p className="mix-title"> Daily Mix 2 </p>
                <p className="mix-artists"> Eminem, JayZ, Nas </p>
              </span>

              <span className="mix-icon">
                <img src="https://www.demilked.com/magazine/wp-content/uploads/2019/02/5c66b23aa4f17-eminem-never-smile-photos-mike-brown-17-5c651ed32637e__605.jpg" />
                <p className="mix-title"> Daily Mix 1 </p>
                <p className="mix-artists"> Eminem, JayZ, Nas </p>
              </span>

              <span className="mix-icon">
                <img src="http://i2.cdn.turner.com/cnn/dam/assets/140618171044-sia-beverly-hills-2014-story-top.jpg" />
                <p className="mix-title"> Daily Mix 2 </p>
                <p className="mix-artists"> Eminem, JayZ, Nas </p>
              </span>

              <span className="mix-icon">
                <img src="https://www.demilked.com/magazine/wp-content/uploads/2019/02/5c66b23aa4f17-eminem-never-smile-photos-mike-brown-17-5c651ed32637e__605.jpg" />
                <p className="mix-title"> Daily Mix 1 </p>
                <p className="mix-artists"> Eminem, JayZ, Nas </p>
              </span>

              <span className="mix-icon">
                <img src="http://i2.cdn.turner.com/cnn/dam/assets/140618171044-sia-beverly-hills-2014-story-top.jpg" />
                <p className="mix-title"> Daily Mix 2 </p>
                <p className="mix-artists"> Eminem, JayZ, Nas </p>
              </span>

              <span className="mix-icon">
                <img src="https://www.demilked.com/magazine/wp-content/uploads/2019/02/5c66b23aa4f17-eminem-never-smile-photos-mike-brown-17-5c651ed32637e__605.jpg" />
                <p className="mix-title"> Daily Mix 1 </p>
                <p className="mix-artists"> Eminem, JayZ, Nas </p>
              </span>

              <span className="mix-icon">
                <img src="http://i2.cdn.turner.com/cnn/dam/assets/140618171044-sia-beverly-hills-2014-story-top.jpg" />
                <p className="mix-title"> Daily Mix 2 </p>
                <p className="mix-artists"> Eminem, JayZ, Nas </p>
              </span>

              <span className="mix-icon">
                <img src="https://www.demilked.com/magazine/wp-content/uploads/2019/02/5c66b23aa4f17-eminem-never-smile-photos-mike-brown-17-5c651ed32637e__605.jpg" />
                <p className="mix-title"> Daily Mix 1 </p>
                <p className="mix-artists"> Eminem, JayZ, Nas </p>
              </span>

              <span className="mix-icon">
                <img src="http://i2.cdn.turner.com/cnn/dam/assets/140618171044-sia-beverly-hills-2014-story-top.jpg" />
                <p className="mix-title"> Daily Mix 2 </p>
                <p className="mix-artists"> Eminem, JayZ, Nas </p>
              </span>

              <span className="mix-icon">
                <img src="https://www.demilked.com/magazine/wp-content/uploads/2019/02/5c66b23aa4f17-eminem-never-smile-photos-mike-brown-17-5c651ed32637e__605.jpg" />
                <p className="mix-title"> Daily Mix 1 </p>
                <p className="mix-artists"> Eminem, JayZ, Nas </p>
              </span>

              <span className="mix-icon">
                <img src="http://i2.cdn.turner.com/cnn/dam/assets/140618171044-sia-beverly-hills-2014-story-top.jpg" />
                <p className="mix-title"> Daily Mix 2 </p>
                <p className="mix-artists"> Eminem, JayZ, Nas </p>
              </span>


            </div>

          </div>

        </div> 

        <div className="launcher-footer">

        </div>


      </div>
    )
  }
}

export default WebLauncher;