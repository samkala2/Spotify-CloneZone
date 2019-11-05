import React from 'react';
import {withRouter} from 'react-router-dom'

class ArtistSongs extends React.Component{
    constructor(props){
        super(props);
        this.handleHoverSong = this.handleHoverSong.bind(this);
        this.handleHoverOutSong = this.handleHoverOutSong.bind(this);
        this.state = {
          songUrl: "",
          songTitle: "",
          songArtist: "",
          songsInfo: this.props.artistSongs
        }
    }

    componentWillMount(){
        let artistId = this.props.match.params.artistId;
        this.props.receiveArtistSong(artistId)
        .then( () => this.props.getArtistImage(artistId));
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


    render(){
        return(
            <div className="artistPage">
            
                {
                    (this.props.artistSongs.length > 0) && <div className="artist-image-cont" >
                    <p className="main-artist-song"> {this.props.artistSongs[0].artist} </p>    
                        <img className="big-image-artist" src={this.props.artistImage.photoUrl} />
                    </div> 
                }

                <ul className="each-song-result    ">
                    {this.props.artistSongs.map(song =>
                    <li onMouseEnter={() => this.handleHoverSong(song)} 
                        onMouseLeave= {() => this.handleHoverOutSong(song)} 
                        id="each-song-result-2" 
                        className={"each-song-res" + song.id} >
                        
                        <i onClick={() => { this.playSongios(song) }} id={song.id} className="icon ion-md-play display-n"></i>

                        <img className= {"music-note" + " " +  song.id} src="https://craftifybucket.s3.us-east-2.amazonaws.com/music_note.png"/>
                        
                        <img  className="small-image-song" src={song.songImageUrl} />
                        <div className="song-info-2">

                        <div className="song-title-2">  {song.title}      </div>
                        </div>
                    </li>)}
                </ul> 
            </div>

            
        )
    }
}

export default withRouter(ArtistSongs);