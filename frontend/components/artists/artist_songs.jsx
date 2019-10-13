import React from 'react';
import {withRouter} from 'react-router-dom'

class ArtistSongs extends React.Component{
    constructor(props){
        super(props);
        this.SetStateHoveredSong = this.SetStateHoveredSong.bind(this);
        this.state = {
          songUrl: "",
          songTitle: "",
          songArtist: "",
          songsInfo: this.props.artistSongs
        }
    }


    componentDidMount(){
        let artistId = this.props.match.params.artistId;
        this.props.receiveArtistSong(artistId);
    }
    


    SetStateHoveredSong(song){
        let playButton = document.getElementById(song.id.toString())
        // debugger;
        playButton.classList.remove("display-n")
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
        // receiveArtistSong
        this.props.receiveCurrentSong(song.id, song.songUrl, song.artist, song.title, song.songImageUrl)
      }


    render(){
        return(
            <div className="artistPage">
            
               
                
                {
                    (this.props.artistSongs.length > 0) && <div className="artist-image-cont" >    
                        <img className="big-image-artist" src={this.props.artistSongs[0].songImageUrl} />
                    <p className="main-artist-song"> {this.props.artistSongs[0].artist} </p>
                    </div> 

                }

                <ul className="each-song-result">
                    {this.props.artistSongs.map(song =>
                    <li onMouseEnter={() => this.SetStateHoveredSong(song)}  id="each-song-result" className={"each-song-res" + song.id + " " + "overlay" + " " + "gray"} >
                        <i onClick={() => { this.playSongios(song) }} id={song.id} className="icon ion-md-play display-n"></i>
                        
                        <img  className="small-image-song" src={song.songImageUrl} />
                        <span className="song-info">
                        <span className="song-title">  {song.title} </span>
                        <span className="song-artist">  {song.artist} </span>
                        </span>
                    </li>)}
                </ul>
               
            </div>

            
        )
    }
}

export default withRouter(ArtistSongs);