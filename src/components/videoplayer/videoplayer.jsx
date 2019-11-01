import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      playing: this.props.isPlaying,
    };
  }
  componentDidMount() {
    this.videoRef.current.muted = this.props.isMuted;
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const {playing} = this.state;
    if (isPlaying !== playing) {
      this.setState({playing: isPlaying});
    }
    if (isPlaying) {
      this.videoRef.current.play();
    } else {
      this.videoRef.current.load();
    }
  }

  render() {
    const {src, poster} = this.props;
    return (
      <>
        <video ref={this.videoRef} src={src} poster={poster} width="280" height="175"/>
      </>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool,
};
VideoPlayer.defaultProps = {
  isMuted: true,
};
export default VideoPlayer;
