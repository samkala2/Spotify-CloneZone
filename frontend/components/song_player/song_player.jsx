import React from 'react';


class SongPlayer extends React.Component {

  constructor(props){
    super(props);
    this.playSong = this.playSong.bind(this);
    this.playSongAuto = this.playSongAuto.bind(this);
    this.swtichToPlay = this.swtichToPlay.bind(this);
    this.playNext = this.playNext.bind(this);
    this.playNextForward = this.playNextForward.bind(this);
    this.songArtist = this.props.currentlyPlaying.artist;
    this.songTitle= this.props.currentlyPlaying.title;
    this.songUrl= this.props.currentlyPlaying.songUrl;
    this.songImageUrl= this.props.currentlyPlaying.songImageUrl;
    this.nextSongLocation = 0;
    this.previousSongs = [];
    // this.allSongsArr = this.props.allSongs;
    this.playPrevious = this.playPrevious.bind(this);
    // this.displayPlayerDuration = this.displayPlayerDuration.bind(this);
    this.playerDuration = 0;
    // this.currentTime = 1;
    this.state= ({
      currentTime: '0:00',
      songDuration: '6:44'
    })
  }
 

  componentDidMount() {
    let player = document.getElementById('audio-foot');
    // this.setState({
    //   currentTime: (Math.floor(player.currentTime / 60) + ':' + ('0' + Math.floor(player.currentTime % 60)).slice(-2)),
    //   songDuration: (Math.floor(player.duration / 60) + ':' + ('0' + Math.floor(player.duration % 60)).slice(-2))
    // });

    player.addEventListener("timeupdate", e => {
      if(!isNaN(e.target.duration)) {

        this.setState({
          currentTime: (Math.floor(e.target.currentTime / 60) + ':' + ('0' + Math.floor(e.target.currentTime % 60)).slice(-2)),
          songDuration: (Math.floor(e.target.duration / 60) + ':' + ('0' + Math.floor(e.target.duration % 60)).slice(-2))
        });
      }
      });
    }

  playSong(e) {
    e.preventDefault();
    let playbutton = document.getElementsByClassName("play-button")[0];
    
    if (playbutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/play_white.png") {   
    document.getElementsByClassName('audio-footer')[0].play();
    playbutton.src = "https://craftifybucket.s3.us-east-2.amazonaws.com/pause_white.png"
    } else if (playbutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/pause_white.png") {
    document.getElementsByClassName('audio-footer')[0].pause();
    playbutton.src = "https://craftifybucket.s3.us-east-2.amazonaws.com/play_white.png" 
    }
  }

  playSongAuto() {
    this.zeroProgressBar();
    this.swtichToPlay();
  }

  zeroProgressBar(){
    // var player = document.getElementById('audio-foot');
    var progressbar = document.getElementById('progress-b');
    progressbar.value = (1/10000);
  }

  swtichToPlay(){
    document.getElementsByClassName('play-button')[0].click();
    setTimeout( () => document.getElementsByClassName('play-button')[0].click(), 1)
  }

  handleHoverInPlayButton(){
    let playbutton = document.getElementsByClassName("play-button")[0];
    playbutton.classList.remove("opacity")
  }

  handleHoverOutPlayButton(){
    let playbutton = document.getElementsByClassName("play-button")[0];
    playbutton.classList.add("opacity")
  }

  handleHoverInPreviousButton(){
    let previousbutton = document.getElementsByClassName("previous-button")[0];
    previousbutton.classList.remove("opacity")
  }

  handleHoverOutPreviousButton(){
    let previousbutton = document.getElementsByClassName("previous-button")[0];
    previousbutton.classList.add("opacity")
  }

  handleHoverInNextButton(){
    let nextbutton = document.getElementsByClassName("next-button")[0];
    nextbutton.classList.remove("opacity")
  }

  handleHoverOutNextButton(){
    let nextbutton = document.getElementsByClassName("next-button")[0];
    nextbutton.classList.add("opacity")
  }

  handleHoverInShuffleButton(){
    let shufflebutton = document.getElementsByClassName("shuffle-button")[0];
    shufflebutton.classList.remove("opacity")
  }

  handleHoverOutShuffleButton(){
    let shufflebutton = document.getElementsByClassName("shuffle-button")[0];
    shufflebutton.classList.add("opacity")
  }

  handleHoverInRepeatButton(){
    let repeatbutton = document.getElementsByClassName("repeat-button")[0];
    repeatbutton.classList.remove("opacity")
  }

  handleHoverOutRepeatButton(){
    let repeatbutton = document.getElementsByClassName("repeat-button")[0];
    repeatbutton.classList.add("opacity")
  }

  playNext(){
    this.previousSongs.push(this.props.currentlyPlaying)
    
    let repeatbutton = document.getElementsByClassName("repeat-button")[0];

    if (repeatbutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/repeat_green.png") {
      document.getElementById('audio-foot').currentTime = 0;
      document.getElementById('audio-foot').play();
      return
    }

    let shufflebutton = document.getElementsByClassName("shuffle-button")[0];

    if (shufflebutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/shuffle_neon.png") {

    let song = this.props.allSongs[Math.floor(Math.random() * this.props.allSongs.length)];

    this.props.receiveCurrentSong(song.id, song.songUrl, song.artist, song.title, song.songImageUrl)
    this.playSongAuto()
    return
    }
    
    
    this.nextSongLocation += 1

    if (this.nextSongLocation === this.props.allSongs.length){ 
      this.nextSongLocation = 0; 
    }
    let song = this.props.allSongs[this.nextSongLocation];
    this.props.receiveCurrentSong(song.id, song.songUrl, song.artist, song.title, song.songImageUrl)
    this.playSongAuto()
  }

  playPrevious(){
    if (this.previousSongs.length > 0){
      let song = this.previousSongs.pop()
      this.props.receiveCurrentSong(song.id, song.songUrl, song.artist, song.title, song.songImageUrl)
      this.zeroProgressBar();

      let playbutton = document.getElementsByClassName("play-button")[0];
  
       if (playbutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/pause_white.png") {
        // document.getElementsByClassName('audio-footer')[0].pause();
        playbutton.src = "https://craftifybucket.s3.us-east-2.amazonaws.com/play_white.png" 
        }
  
        setTimeout( () => document.getElementsByClassName('play-button')[0].click(), 1)
    }
  }


  playNextForward(){
    this.previousSongs.push(this.props.currentlyPlaying)

    let shufflebutton = document.getElementsByClassName("shuffle-button")[0];

    if (shufflebutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/shuffle_neon.png") {

    let song = this.props.allSongs[Math.floor(Math.random() * this.props.allSongs.length)];

    this.props.receiveCurrentSong(song.id, song.songUrl, song.artist, song.title, song.songImageUrl)
    // this.playSongAuto()
    // return
    } else {

      this.nextSongLocation += 1
      
      if (this.nextSongLocation === this.props.allSongs.length){ 
        this.nextSongLocation = 0; 
      }
      
      let song = this.props.allSongs[this.nextSongLocation];
      this.props.receiveCurrentSong(song.id, song.songUrl, song.artist, song.title, song.songImageUrl)
    }
    

    this.zeroProgressBar();

    let playbutton = document.getElementsByClassName("play-button")[0];

     if (playbutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/pause_white.png") {
      playbutton.src = "https://craftifybucket.s3.us-east-2.amazonaws.com/play_white.png" 
      }

      setTimeout( () => document.getElementsByClassName('play-button')[0].click(), 1)
  }


  HandleRepeatButtonClick(){
    let repeatbutton = document.getElementsByClassName("repeat-button")[0];
    if (repeatbutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/repeat_white.png") {   
      repeatbutton.src = "https://craftifybucket.s3.us-east-2.amazonaws.com/repeat_green.png"
      } else if (repeatbutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/repeat_green.png") {
      repeatbutton.src = "https://craftifybucket.s3.us-east-2.amazonaws.com/repeat_white.png" 
      }
  }

  handleShuffleButtonClick(){
    let shufflebutton = document.getElementsByClassName("shuffle-button")[0];

    if (shufflebutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/shuffle_white.png") {   
      shufflebutton.src = "https://craftifybucket.s3.us-east-2.amazonaws.com/shuffle_neon.png"
      } else if (shufflebutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/shuffle_neon.png") {
      shufflebutton.src = "https://craftifybucket.s3.us-east-2.amazonaws.com/shuffle_white.png" 
      }
  }

  initProgressBar() {
    // let playbutton = document.getElementsByClassName("play-button")[0];


    // if (playbutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/play_white.png") {
    // playbutton.src = "https://craftifybucket.s3.us-east-2.amazonaws.com/pause_white.png" 
    // }

    var player = document.getElementById('audio-foot');
    var progressbar = document.getElementById('progress-b');

    progressbar.value = (player.currentTime / player.duration);
    progressbar.addEventListener("click", seek);

    function seek(event) {
      var percent = event.offsetX / this.offsetWidth;
      player.currentTime = percent * player.duration;
      progressbar.value = percent / 100;
    }
  };

  // displayPlayerCurrentTime(){
  //   let player = document.getElementById('audio-foot');
  //   if (player){
  //     this.setState({currentTime: player.currentTime});
  //   }
    
  // }

  // displayPlayerDuration(){
  //   let player = document.getElementById('audio-foot');
  //   debugger;
    // let playerDurationCont = document.getElementsByClassName('player-duration')[0];
    // playerDurationCont.innerHTML = player.duration;
    // if (player){
    //   this.playerDuration = player.duration;
    // }
    //   return (
    //     <div className="player-life"> {player.duration} </div>)
    //   } else {
    //     return 
    // }  
  // }
  
  durationInSeconds(){
    let time = Math.floor(this.currentTime)
    if (time < 60){
    return (
      <div> 
        <p> {time} </p>
      </div>
    )
    }
  }

  render () {
    window.previousSongs = this.previousSongs;
    window.currently = this.props.currentlyPlaying;
    return (
  
        <div className="song-player-controls">
          
        <img className="song-image-foot" src={this.props.currentlyPlaying.songImageUrl}/>

        <section className="artist-info">
          <div id="song-title"> {this.props.currentlyPlaying.title} </div>
          <div> {this.props.currentlyPlaying.artist} </div>
        </section>



        <div className="player-current-time"> 
                  {this.state.currentTime}    
              </div>


          <div className="buttons-player"> 
              <div className="button-icons">  


              <img onClick={this.handleShuffleButtonClick}
              onMouseOut={this.handleHoverOutShuffleButton} 
              onMouseEnter={this.handleHoverInShuffleButton} className="shuffle-button opacity" src="https://craftifybucket.s3.us-east-2.amazonaws.com/shuffle_white.png"/> 

                <img onClick={this.playPrevious}
                onMouseOut={this.handleHoverOutPreviousButton} 
                onMouseEnter={this.handleHoverInPreviousButton} className="previous-button opacity" src="https://craftifybucket.s3.us-east-2.amazonaws.com/previous_white.png"/> 

                <img onMouseOut={this.handleHoverOutPlayButton} onMouseEnter={this.handleHoverInPlayButton} onClick={this.playSong} className="play-button opacity" src="https://craftifybucket.s3.us-east-2.amazonaws.com/play_white.png"/> 
             
                  <audio id="audio-foot" 
                  onEnded={this.playNext}
                  onTimeUpdate={this.initProgressBar} 
                  className="audio-footer" 
                  src={this.props.currentlyPlaying.songUrl} controls/> 
                
                <img onClick={this.playNextForward} onMouseOut={this.handleHoverOutNextButton} onMouseEnter={this.handleHoverInNextButton} className="next-button opacity" src="https://craftifybucket.s3.us-east-2.amazonaws.com/next_white.png"/> 

                <img onMouseOut={this.handleHoverOutRepeatButton} onMouseEnter={this.handleHoverInRepeatButton} onClick={this.HandleRepeatButtonClick} className="repeat-button opacity" src="https://craftifybucket.s3.us-east-2.amazonaws.com/repeat_white.png"/> 
              
                {/* {this.displayPlayerCurrentTime} */}

              
              </div>

            


          <br />

          <div className="progress-cont">
            <progress id="progress-b" className="progress-bar">  </progress>

            <span className="player-duration"> 
                  {this.state.songDuration} 
                </span>
          </div>
         

          </div>

       
                
         
        </div>       
    )
  }
}

export default SongPlayer;

