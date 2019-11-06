import React from 'react';
import {withRouter} from 'react-router-dom'

class ArtistSongs extends React.Component{
    constructor(props){
        super(props);
        this.handleHoverSong = this.handleHoverSong.bind(this);
        this.handleHoverOutSong = this.handleHoverOutSong.bind(this);
        this.getUniqueAlbums = this.getUniqueAlbums.bind(this);
        this.getSongsByAlbum = this.getSongsByAlbum.bind(this);
        this.state = {
          songUrl: "",
          songTitle: "",
          songArtist: "",
          songsInfo: this.props.artistSongs,
          distinctAlbums: [],
          dividedSongs: [] ,
        }
        
    }

    componentWillMount(){
        let artistId = this.props.match.params.artistId;
        this.props.receiveArtistSong(artistId)
        .then( () => this.props.getArtistImage(artistId))
        .then( () => this.getUniqueAlbums())
        .then( () => this.getSongsByAlbum());
    }

    // componentDidMount() {
    //     debugger;
    //     this.hideAdditionalPhoto();
    // }

    
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


    hideAdditionalPhoto() {
        
        if(this.props.uniqueImages[0].length > 0 &&  (this.props.uniqueImages[this.props.uniqueImages.length -1].slice(151) !== this.props.uniqueImages[0].slice(151)) ) {
            let secondPhoto = document.getElementsByClassName("album-artist-image-2")[0]
            secondPhoto.classList.add("hidden-title")
        }
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

    getUniqueAlbums() {
        let arraySongs = this.props.artistSongs;
        let newarr =[] 
        Object.values(arraySongs).forEach(song => newarr.push(song.albumName))
        const distinctAlbumsArr = [...new Set(newarr)]
        this.setState( {distinctAlbums: distinctAlbumsArr})
    }

    getSongsByAlbum() {
        let distinctAlbumArr = this.state.distinctAlbums;
        let dividedAlbumSongs = [];
        distinctAlbumArr.forEach( (albumName) => {
            let subArraySongs = this.props.artistSongs.filter(song => 
                song.albumName === albumName )
            dividedAlbumSongs.push(subArraySongs)
            // subArraySongs = [];
        } )
        this.setState( { dividedSongs: dividedAlbumSongs})
    }

    render(){
        // debugger;
        return(
            <div className="artistPage">
            
                {
                    (this.props.artistSongs.length > 0) && <div className="artist-image-cont" >
                    <p className="main-artist-song"> {this.props.artistSongs[0].artist} </p>    
                        <img className="big-image-artist" src={this.props.artistImage.photoUrl} />
                    </div> 
                }

                <ul className="each-song-result">
                
                <div className="album-title-image-cont"> 
                    <p className="unique-album-title"> {this.props.uniqueAlbums[0]} </p>
                    <img className="album-artist-image" src={this.props.uniqueImages[0]} />

                </div>
                    
                    {this.props.artistSongs.length> 0 && <div>{this.props.artistSongs.filter(song => song.albumName === this.props.uniqueAlbums[0]).map(song =>

                    <li onMouseEnter={() => this.handleHoverSong(song)} 
                        onMouseLeave= {() => this.handleHoverOutSong(song)} 
                        id="each-song-result-2" 
                        className={"each-song-res" + song.id} >
                        
                        <i onClick={() => { this.playSongios(song) }} id={song.id} className="icon ion-md-play display-n"></i>

                        <img className= {"music-note" + " " +  song.id} src="https://craftifybucket.s3.us-east-2.amazonaws.com/music_note.png"/>
                        
                        {/* <img  className="small-image-song" src={song.songImageUrl} /> */}
                        <div className="song-info-2">

                        <div className="song-title-2">  {song.title}      </div>
                        </div>
                    </li>)}
                    </div>}


                    { 

                        (this.props.uniqueImages[1])   && 
                        
                        <div>
                    
                    <div className="album-title-image-cont-2">
                        <p className="unique-album-title"> {this.props.uniqueAlbums[1]} </p>
                        <img className="album-artist-image-2" src={this.props.uniqueImages[1]} />
                        
                    </div>


                    {this.props.artistSongs.filter(song => song.albumName === this.props.uniqueAlbums[1]).map(song =>

                    <li onMouseEnter={() => this.handleHoverSong(song)} 
                        onMouseLeave= {() => this.handleHoverOutSong(song)} 
                        id="each-song-result-2" 
                        className={"each-song-res" + song.id} >
                        
                        <i onClick={() => { this.playSongios(song) }} id={song.id} className="icon ion-md-play display-n"></i>

                        <img className= {"music-note" + " " +  song.id} src="https://craftifybucket.s3.us-east-2.amazonaws.com/music_note.png"/>
                        
                       
                        <div className="song-info-2">

                        <div className="song-title-2">  {song.title}      </div>
                        </div>
                    </li>)}
                    </div>  

                    }


                        <br/>
                        <br/>
                    {/* <div> ------- </div> */}
                    
                    {/* { this.state.dividedSongs[1].length > 0 &&  <div> 
                    {this.state.divideSongs[1].map(song =>
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
                    </div>  } */}
                </ul> 


            </div>

            
        )
    }
}

export default withRouter(ArtistSongs);