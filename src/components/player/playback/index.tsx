import React, { StatelessComponent, Props } from 'react';
import { Media } from 'src/types/media';

interface PlaybackProps extends Props<void> {
  track: Media;
}

const getAudioPlayer = (mediaUrl, imageUrl) => {
  return (
    <div className="audio">
      <img src={imageUrl} />
      <audio preload="auto" crossOrigin="anonymous">
        <source src={mediaUrl} />
      </audio>
    </div>
  );
};

const getVideoPlayer = (mediaUrl, imageUrl) => {
  return (
    <div className="video">
      <video poster={imageUrl} crossOrigin="anonymous">
        <source src={mediaUrl} />
      </video>
    </div>
  );
};

const Playback: StatelessComponent<PlaybackProps> = function Playback({
  track
}) {
  return (
    <div className="playback">
      {track.type === 'video'
        ? getVideoPlayer(track.mediaUrl, track.imageUrl)
        : getAudioPlayer(track.mediaUrl, track.imageUrl)}
    </div>
  );
};

export default Playback;
