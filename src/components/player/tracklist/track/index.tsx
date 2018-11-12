import React, { StatelessComponent, Props } from 'react';
import './style.scss';
import { Media } from 'src/types/media';

interface TrackProps extends Props<void> {
  track: Media;
  onTrackClick: (track: Media) => void;
  isSelected: boolean;
}

const Track: StatelessComponent<TrackProps> = function Track({
  track,
  onTrackClick,
  isSelected
}) {
  const onClickHandler = e => {
    onTrackClick(track);
  };

  return (
    <div
      className={`track ${isSelected ? 'isSelected' : ''}`}
      onClick={onClickHandler}
    >
      <div className="title">{track.title}</div>
      <div className="mediaArt">
        <img src={track.imageUrl} />
      </div>
    </div>
  );
};

export default Track;
