import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.pauseVideoHandler = this.pauseVideoHandler.bind(this);
    this.secondsToHms = this.secondsToHms.bind(this);
    this.videoProgress = this.videoProgress.bind(this);
    this.state = {
      playing: props.isPlaying,
      currentTime: 0,
      pause: false,
      duration: 0,
    };
  }
  componentDidMount() {
    const {isMuted, isPlaying} = this.props;
    this.videoRef.current.muted = isMuted;
    this.videoRef.current.onloadedmetadata = () => {
      this.setState({
        duration: this.videoRef.current.duration,
      }, () => {
        this.videoRef.current.ontimeupdate = () => {
          this.setState({
            currentTime: this.videoRef.current.currentTime
          }
          );
        };
      });
    };
    if (isPlaying) {
      this.videoRef.current.play();
    }
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const {playing} = this.state;
    if (isPlaying !== playing) {
      this.setState({playing: isPlaying}, () => {
        if (isPlaying) {
          this.videoRef.current.play();
        } else {
          this.videoRef.current.load();
        }
      });
    }
  }

  secondsToHms(d) {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);
    return h + `:` + m + `:` + s;
  }

  videoProgress() {
    const {duration, currentTime} = this.state;
    return duration > 0 ? Math.floor(currentTime / duration * 100) : 0;
  }

  pauseVideoHandler() {
    const {pause} = this.state;
    this.setState({pause: !pause}, () => {
      if (pause) {
        this.videoRef.current.pause();
      } else {
        this.videoRef.current.play();
      }
    });
  }

  render() {
    const {src, poster, fullScreen, fullScreenCancel} = this.props;
    const {pause, currentTime} = this.state;
    return (
      <>
        {fullScreen &&
        <div className="player">
          <video ref={this.videoRef} className="player__video" src={src} poster={poster}/>
          <button type="button" onClick={fullScreenCancel} className="player__exit">Exit</button>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={this.videoProgress()} max="100"/>
                <div className="player__toggler" style={{left: this.videoProgress() + `%`}}>Toggler</div>
              </div>
              <div className="player__time-value">{this.secondsToHms(currentTime)}</div>
            </div>

            <div className="player__controls-row">
              <button onClick={this.pauseVideoHandler} type="button" className="player__play">
                {pause &&
                <>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </>
                }
                {!pause &&
                <>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"/>
                  </svg>
                  <span>Pause</span>
                </>
                }
              </button>
              <div className="player__name">Transpotting</div>
              {!fullScreen && <button type="button" className="player__full-screen">
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"/>
                </svg>
                <span>Full screen</span>
              </button>}
            </div>
          </div>
        </div>
        }
        {!fullScreen && <video ref={this.videoRef} src={src} poster={poster} width="280" height="175"/>}
      </>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool,
  fullScreenCancel: PropTypes.func,
  fullScreen: PropTypes.bool,
};
VideoPlayer.defaultProps = {
  isMuted: true,
};
export default VideoPlayer;
