import React from 'react';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom';


class AlbumSongs extends React.Component{
    constructor(props){
        super(props);
        this.handleHoverSong = this.handleHoverSong.bind(this);
        this.handleHoverOutSong = this.handleHoverOutSong.bind(this);
        this.goToArtistPage = this.goToArtistPage.bind(this);
        this.seStateSongId = this.seStateSongId.bind(this);
        this.addNewPlaylistSong = this.addNewPlaylistSong.bind(this);
        this.hidePlaylistModal = this.hidePlaylistModal.bind(this);
        this.state = {
          playlistSongId: 0,
          playlistModal: false,
        //   showPlus: false
        }
    }

    componentWillMount(){
        let albumId = this.props.match.params.albumId;
        this.props.receiveAlbumSongs(albumId);
        this.props.getAlbumInfo(albumId);
    }
    
    seStateSongId(id){
        this.setState({playlistSongId: id, playlistModal: true})
    }

    hidePlaylistModal(){
        this.setState({playlistModal: false})
    }

    addNewPlaylistSong(playlistId){
        this.props.addNewPlaylistSong({
            song_id: this.state.playlistSongId,
            ord: 2,
            playlist_id: playlistId
        })
        this.setState({playlistModal: false})
    }

    // addToPlaylist(playlistId, songId) {
    //     this.props.addNewPlaylistSong({
    //                 playlist_id: playlistId,
    //                 ord: 2,
    //                 song_id: songId
    //             })
    // }


    handleHoverSong(song){
        let playButton = document.getElementById(song.id.toString())
        playButton.classList.remove("display-n")

        let musicNote = document.getElementsByClassName(song.id.toString())[0];
        musicNote.classList.add("display-n");

        let addButton = document.getElementById("plus"+song.id.toString())
        addButton.classList.remove("display-n")
    }


    handleHoverOutSong(song){
        let playButton = document.getElementById(song.id.toString())
        playButton.classList.add("display-n")

        let musicNote = document.getElementsByClassName(song.id.toString())[0];
        musicNote.classList.remove("display-n");

        let addButton = document.getElementById("plus"+song.id.toString())
        addButton.classList.add("display-n")
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
        window.playlistSongState = this.state;
        return(
            <div className="artistPage">
            {
                (this.props.albumInfo.length > 0) && <div className="album-image-cont" >
                    
                    <div className="album-info-cont">
                    <p className="main-album-info"> {this.props.albumInfo[1]} </p> 
                    
                    <Link onClick={() => this.goToArtistPage(artistId)} className=""  to={`/weblauncher/${artistId}/songs`} >  
                    <p className="album-artist-name">  {this.props.albumInfo[3]} </p> 
                    </Link>

                    </div>  
                    <img className="single-album-image" src={this.props.albumInfo[2]} />
                </div> 
            }

                <ul className="each-song-result-4">
                    {this.props.albumSongs.map(song =>
                    <li onMouseEnter={() => this.handleHoverSong(song)} 
                        onMouseLeave= {() => this.handleHoverOutSong(song)} 
                        id="each-song-result-4" 
                        className={"each-song-res" + song.id} >
                        
                        <i onClick={() => { this.playSongios(song) }} id={song.id} className="icon ion-md-play display-n"></i>

                        <img className= {"music-note" + " " +  song.id} src="https://craftifybucket.s3.us-east-2.amazonaws.com/music_note.png"/>
                        
                        <div className="song-info-2">

                        <div className="song-title-2">  {song.title}      </div>
                        </div>

                        { <img className="plus-add-icon-2 display-n"  id={"plus" + song.id}
                        src="https://craftifybucket.s3.us-east-2.amazonaws.com/iconplus4.png" 
                        onClick={() => this.seStateSongId(song.id)}/> }
                    </li>)}
                </ul> 

                { this.state.playlistModal && <div id="myModal" className="modal-pl">

                <ul className="playlist-list3">
                <div onClick={() => this.hidePlaylistModal()} className="close-playlist">&times;</div>
                <p class="select-playlist"> Select a Playlist </p>
                {this.props.playlists.map(playlist => {
                return(
                    <li className="playlist2-li" onClick={() => this.addNewPlaylistSong(playlist.id)}> 
                    {/* <Link to={`/weblauncher/playlist/${playlist.id}`}>  */}
                    <img src="https://craftifybucket.s3.us-east-2.amazonaws.com/default-playlist.png"/>
                    <p> {playlist.name} </p> 
                    {/* </Link> */}
                    </li>
                )
                })}
                </ul>
                </div> }

            </div>

            
        )
    }
}

export default withRouter(AlbumSongs);