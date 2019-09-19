import React from 'react';


class SongPlayer extends React.Component {

  constructor(props){
    super(props);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);

  }


  playSong(e) {
    e.preventDefault();
    document.getElementsByClassName('audio-footer')[0].play();
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
  
        <div className="launcher-footer">
          <div className="buttons-player"> 
          <span> {this.props.songTitle} </span>
          <span> - {this.props.songArtist}</span>

              <div className="button-icons">  

             

                <i class="icon ion-md-rewind"></i>

                <i onClick={this.playSong} className="icon ion-md-play"> 
             
              <audio id="audio-foot" 
              onTimeUpdate={this.initProgressBar} 
              className="audio-footer" 
              src={this.props.songUrl} controls/> 
                </i>  

                <i onClick={this.pauseSong} class="icon ion-md-pause"></i>
            
            
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

