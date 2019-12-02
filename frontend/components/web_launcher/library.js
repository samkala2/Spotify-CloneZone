import React from 'react';
import { Link } from 'react-router-dom';

class Library extends React.Component {

    constructor(props){ 
        super(props);
        this.state = {
            playlistId: 0,
            playlistName: "",
            playlistImage:  0
        }
        this.playlistImage = this.playlistImage.bind(this);
    }

    componentDidMount(){
        this.props.getUserPlaylists(this.props.userId[0].id)
        .then( () => this.props.playlists.forEach((playlist) => {
            this.playlistImage(playlist.id);
        }) )
    }

    // componentWillMount(){
    //     this.props.playlists.forEach((playlist) => {
    //         this.playlistImage(playlist.id);
    //     })
    // }

    playlistImage(playlistId){
       this.props.fetchPlaylistSongs(playlistId)
       .then(songs => {
        //    debugger
           if (Object.values(songs).length > 0) {
               let url = Object.values(songs)[0].songImageUrl;
                this.setState({ [`${playlistId}`]: url })   } else {
               let defaultUrl = "https://craftifybucket.s3.us-east-2.amazonaws.com/default-playlist.png"
                this.setState({ [`${playlistId}`]: defaultUrl })
            }
       })
    }

    render(){
        // debugger;
        window.librayState = this.state;
        return(
            <div className="library-container"> 

                <div className="library-links"> 
                    <p className="opacity albumsb white-on" 
                    // onClick={ () => this.toggleResults("AllAlbums") }
                    > PLAYLISTS </p>
                </div>

                <div> 
                    
                    <ul className="playlist-ul"> 
                    {this.props.playlists.map((playlist) => 

                        <li> 
                        <div className="playlist-info">
                        {/* {this.playlistImage(playlist.id)} */}
                            <img className="playlist-image"
                            src={this.state[`${playlist.id}`]}
                            />
                            <div className="playlist-title"> 
                            <Link  className="playlist-show-link"
                            to={`/weblauncher/playlist/${playlist.id}`}> 
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