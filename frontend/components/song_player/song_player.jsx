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
    // debugger;
    if (playbutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/play_white.png") {   
    document.getElementsByClassName('audio-footer')[0].play();
    playbutton.src = "https://craftifybucket.s3.us-east-2.amazonaws.com/pause_white.png"
    } else if (playbutton.src === "https://craftifybucket.s3.us-east-2.amazonaws.com/pause_white.png") {
    document.getElementsByClassName('audio-footer')[0].pause();
    playbutton.src = "https://craftifybucket.s3.us-east-2.amazonaws.com/play_white.png" 
    }
  }

  pauseSong(e) {
    e.preventDefault();
    document.getElementsByClassName('audio-footer')[0].pause();
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

             

                <img className="previous-button" src="https://craftifybucket.s3.us-east-2.amazonaws.com/previous_white.png"/> 

                <img onClick={this.playSong} className="play-button" src="https://craftifybucket.s3.us-east-2.amazonaws.com/play_white.png"/> 
             
                  <audio id="audio-foot" 
                  onTimeUpdate={this.initProgressBar} 
                  className="audio-footer" 
                  src={this.props.songUrl} controls/> 
                
                <img className="next-button" src="https://craftifybucket.s3.us-east-2.amazonaws.com/next_white.png"/> 
              
            
              </div>


          <br />
          <progress id="progress-b" className="progress-bar"> </progress>
          </div>
        

        </div>       
    )
  }
}

export default SongPlayer;

