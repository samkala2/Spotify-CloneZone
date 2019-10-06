import React from 'react';


class SongPlayer extends React.Component {

  constructor(props){
    super(props);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);

  }


  playSong(e) {
    e.preventDefault();
    let playbutton = document.getElementById("play-button");
    // debugger;
    if (playbutton.classList[1] === "ion-md-play") {   
    document.getElementsByClassName('audio-footer')[0].play();
    playbutton.classList.add('ion-md-pause');
    playbutton.classList.remove('ion-md-play'); 
    } else if (playbutton.classList[1] === "ion-md-pause") {
    document.getElementsByClassName('audio-footer')[0].pause();
    playbutton.classList.add('ion-md-play');
    playbutton.classList.remove('ion-md-pause'); 
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

             

                <i class="icon ion-md-rewind"></i>

                <i onClick={this.playSong} id="play-button" className="icon ion-md-play"> 
             
                  <audio id="audio-foot" 
                  onTimeUpdate={this.initProgressBar} 
                  className="audio-footer" 
                  src={this.props.songUrl} controls/> 
                </i>  

                {/* <i onClick={this.pauseSong} class="icon ion-md-pause"></i> */}
            
            
                <i class="icon ion-md-fastforward"></i>

              
            
              </div>


          <br />
          <progress id="progress-b" className="progress-bar"> </progress>
          </div>
        

        </div>       
    )
  }
}

export default SongPlayer;

