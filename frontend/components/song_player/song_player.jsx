import React from 'react';


class SongPlayer extends React.Component {

  constructor(props){
    super(props);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    

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

  // componentDidMount(){
  //   this.displayPlayerCurrentTime();
  //   this.displayPlayerDuration();
  // }

  pauseSong(e) {
    e.preventDefault();
    document.getElementsByClassName('audio-footer')[0].pause();
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

  HandleRepeatButtonClick(){
    let repeatbutton = document.getElementsByClassName("repeat-button")[0];
    if (repeatbutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/repeat_white.png") {   
      repeatbutton.src = "https://craftifybucket.s3.us-east-2.amazonaws.com/repeat_green.png"
      } else if (repeatbutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/repeat_green.png") {
      repeatbutton.src = "https://craftifybucket.s3.us-east-2.amazonaws.com/repeat_white.png" 
      }
  }

  initProgressBar() {
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
  //   let currTime = Math.floor(player.currentTime).toString();
  //   // debugger;
  //   return( 
  //     <div className="player-dur"> <p> {currTime} </p> </div>
  //   )
    
  // }

  // displayPlayerDuration(){
  //   let player = document.getElementById('audio-foot');

  //   let duration = Math.floor(player.duration);
  //   debugger;
    
  //   let playerDuration = document.getElementsByClassName('player-duration')[0];

  //   return (player.duration)
    
  // }

  render () {
    return (
  
        <div className="song-player-controls">
          
            <img className="song-image-foot" src={this.props.songImageUrl} />

        <section className="artist-info">
          <span> {this.props.songTitle} </span>
          <span> - {this.props.songArtist} </span>
        </section>


          <div className="buttons-player"> 




              <div className="button-icons">  

              <img onMouseOut={this.handleHoverOutShuffleButton} onMouseEnter={this.handleHoverInShuffleButton} className="shuffle-button opacity" src="https://craftifybucket.s3.us-east-2.amazonaws.com/shuffle_white.png"/> 

                <img onMouseOut={this.handleHoverOutPreviousButton} onMouseEnter={this.handleHoverInPreviousButton} className="previous-button opacity" src="https://craftifybucket.s3.us-east-2.amazonaws.com/previous_white.png"/> 

                <img onMouseOut={this.handleHoverOutPlayButton} onMouseEnter={this.handleHoverInPlayButton} onClick={this.playSong} className="play-button opacity" src="https://craftifybucket.s3.us-east-2.amazonaws.com/play_white.png"/> 
             
                  <audio id="audio-foot" 
                  onTimeUpdate={this.initProgressBar} 
                  className="audio-footer" 
                  src={this.props.songUrl} controls/> 
                
                <img onMouseOut={this.handleHoverOutNextButton} onMouseEnter={this.handleHoverInNextButton} className="next-button opacity" src="https://craftifybucket.s3.us-east-2.amazonaws.com/next_white.png"/> 

                <img onMouseOut={this.handleHoverOutRepeatButton} onMouseEnter={this.handleHoverInRepeatButton} onClick={this.HandleRepeatButtonClick} className="repeat-button opacity" src="https://craftifybucket.s3.us-east-2.amazonaws.com/repeat_white.png"/> 
              
                {this.displayPlayerCurrentTime}
                
              </div>


          <br />

          <div className="progress-cont">
            <progress id="progress-b" className="progress-bar">  </progress>
            <div className="player-duration"> 
                    {this.displayPlayerDuration}
            </div>
          </div>
          
          </div>

          
        

        </div>       
    )
  }
}

export default SongPlayer;

