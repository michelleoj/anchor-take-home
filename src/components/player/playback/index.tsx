import React, { StatelessComponent, Props } from 'react';
import { Media } from 'src/types/media';
import './style.scss';

interface PlaybackProps extends Props<void> {
  track: Media;
  audioRef: (instance: HTMLMediaElement) => any;
  videoRef: (instance: HTMLMediaElement) => any;
  onMediaEnded: () => any;
}

const getMediaPlayer = (isVideo, mediaUrl, imageUrl, ref, onMediaEnded) => {
  return isVideo ? (
    <div className="video">
      <video
        poster={imageUrl}
        crossOrigin="anonymous"
        ref={ref}
        onEnded={onMediaEnded}
      >
        <source src={mediaUrl} />
      </video>
    </div>
  ) : (
    <div className="audio">
      <img src={imageUrl} />
      <audio
        preload="auto"
        crossOrigin="anonymous"
        ref={ref}
        onEnded={onMediaEnded}
      >
        <source src={mediaUrl} />
      </audio>
    </div>
  );
};

const Playback: StatelessComponent<PlaybackProps> = function Playback({
  track,
  audioRef,
  videoRef,
  onMediaEnded
}) {
  const isVideo = track.type === 'video';
  const ref = isVideo ? videoRef : audioRef;
  return (
    <div className="playback">
      {getMediaPlayer(
        isVideo,
        track.mediaUrl,
        track.imageUrl,
        ref,
        onMediaEnded
      )}
    </div>
  );
};

export default Playback;
