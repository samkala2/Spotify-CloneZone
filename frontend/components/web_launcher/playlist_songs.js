import React from 'react';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom';

class PlaylistSongs extends React.Component{
    constructor(props){
        super(props);
        this.handleHoverSong = this.handleHoverSong.bind(this);
        this.handleHoverOutSong = this.handleHoverOutSong.bind(this);
        this.getPlaylistImageUrl = this.getPlaylistImageUrl.bind(this);
        this.state = {
            songs: [],
            imageUrl: ""
        }
    }

    
    componentDidMount(){
        let playlistId = this.props.match.params.playlistId
        // debugger;
        this.props.getPlaylistSongs(playlistId)
        .then(() => this.setState({songs: Object.values(this.props.songs)}))
        // this.props.getPlaylistsong(id)
    }

    componentDidUpdate(prevProps) {
        if (
        prevProps.match.params.playlistId != this.props.match.params.playlistId
        ) {
        let playlistId = this.props.match.params.playlistId
        this.setState({ songs: [{   }]  });
        this.props.getPlaylistSongs(playlistId)
        .then(() => this.setState({songs: Object.values(this.props.songs)}))
        }
    }

    getPlaylistImageUrl(){
        if (this.state.songs.length > 0) {
            // debugger;
            this.setState({imageUrl: this.state.songs[0].songImageUrl})
        } else {
            this.setState({ imageUrl: "https://craftifybucket.s3.us-east-2.amazonaws.com/default-playlist.png" }) 
        }
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

    playSongios(song) {
        // this.setState({
        //   songUrl: song.songUrl,
        //   songTitle: song.title,
        //   songArtist: song.artist
        // });

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


    render(){
        let songs = this.state.songs;
        window.showstate = this.state;
        
        return(
        <div>
            
            <div className="library-links-playlistsongs"> 
                <Link to="/weblauncher/library"> 
                <p className="opacity albumsb white-on" 
                // onClick={ () => this.toggleResults("AllAlbums") }
                > Playlists </p>
                </Link>
            </div>

            {/* <img src="https://craftifybucket.s3.us-east-2.amazonaws.com/loading.svg"/> */}

            <img className="playlist-show-image" src={this.state.imageUrl}/>
            {/* {songs.map(song => (
                <li> {song.title} </li>
            ))} */}

            <ul className="each-song-result-4">
                    {songs.map(song =>
                    <li onMouseEnter={() => this.handleHoverSong(song)} 
                        onMouseLeave= {() => this.handleHoverOutSong(song)} 
                        id="each-song-result-4" 
                        className={"each-song-res" + song.id} >
                        
                        <i onClick={() => { this.playSongios(song) }} id={song.id} className="icon ion-md-play display-n"></i>

                        <img className= {"music-note" + " " +  song.id} src="https://craftifybucket.s3.us-east-2.amazonaws.com/music_note.png"/>
                        
                        <div className="song-info-2">

                        <div className="song-title-2">  {song.title}      </div>
                        </div>
                    </li>)}
                </ul> 
        </div>
            )
    }



}

export default withRouter(PlaylistSongs)