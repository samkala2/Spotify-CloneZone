import React from 'react';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom';


class AlbumSongs extends React.Component{
    constructor(props){
        super(props);
        this.handleHoverSong = this.handleHoverSong.bind(this);
        this.handleHoverOutSong = this.handleHoverOutSong.bind(this);
        this.goToArtistPage = this.goToArtistPage.bind(this);
        // this.state = {
        //   songUrl: "",
        //   songTitle: "",
        //   songArtist: "",
        //   songsInfo: this.props.AlbumSongs
        // }
    }

    componentWillMount(){
        let albumId = this.props.match.params.albumId;
        this.props.receiveAlbumSongs(albumId);
        this.props.getAlbumInfo(albumId);
        // debugger;
        // .then( () => this.props.getArtistImage(albumId));
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

    goToArtistPage(artistId){
        this.props.receiveArtistSong(artistId)
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
        let artistId = this.props.albumInfo[4]
        return(
            <div className="artistPage">
            {/* [3] -- album name */}
            {/* [0] -- album image url */}
            
                {
                    (this.props.albumInfo.length > 0) && <div className="artist-image-cont" >
                        
                        <div className="container-album">
                            <p className="main-album-info"> {this.props.albumInfo[1]} </p> 
                            
                            <Link onClick={() => this.goToArtistPage(artistId)} className="link-to-album-page"  to={`/weblauncher/${artistId}/songs`} >  
                            <p className="album-artist-name">  {this.props.albumInfo[3]} </p> 
                            </Link>

                        </div>  
                        
                        <img className="single-album-image" src={this.props.albumInfo[2]} />
                    </div> 
                }

                <ul className="each-song-result    ">
                    {this.props.albumSongs.map(song =>
                    <li onMouseEnter={() => this.handleHoverSong(song)} 
                        onMouseLeave= {() => this.handleHoverOutSong(song)} 
                        id="each-song-result" 
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

export default withRouter(AlbumSongs);