import React, { StatelessComponent, Props } from 'react';
import { Media } from 'src/types/media';
import './style.scss';
import Track from './track';

interface TracklistProps extends Props<void> {
  tracks: Media[];
  selectedTrack: Media;
  onTrackClick: (track: Media) => void;
}

const Tracklist: StatelessComponent<TracklistProps> = function Tracklist({
  tracks,
  selectedTrack,
  onTrackClick
}) {
  return (
    <div className="tracklist">
      {tracks.map((track, idx) => {
        const isSelected = selectedTrack.id === track.id;
        console.log(isSelected);
        return (
          <Track
            key={idx}
            track={track}
            onTrackClick={onTrackClick}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
};

export default Tracklist;
