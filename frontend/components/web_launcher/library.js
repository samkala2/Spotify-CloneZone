import React from 'react';
import { Link } from 'react-router-dom';

class Library extends React.Component {

    constructor(props){ 
        super(props);
        this.state = {
            playlistId: 0,
            playlistName: ""
        }
    }

    render(){
        // debugger;

        return(
            <div className="library-container"> 

                <div className="library-links"> 
                    <p className="opacity albumsb white-on" 
                    // onClick={ () => this.toggleResults("AllAlbums") }
                    > Playlists </p>
                </div>

                <div> 
                    
                    <ul className="playlist-ul"> 
                    {this.props.playlists.map((playlist) => 

                        <li> 
                        <div className="playlist-info">
                            <img className="playlist-image"
                            // src={this.getPlaylistImage(playlist.id)} 
                            />
                            <div className="playlist-title">  
                            <Link to={`/weblauncher/playlist/${playlist.id}`}> 
                            {playlist.name} </Link>
                            </div>
                        </div>
                        </li>
                        

                    )}
                    </ul>
                </div>
            </div> 
            )
        }
}

export default Library;