import React, { StatelessComponent, Props } from 'react';
import {
  ForwardOutline,
  BackwardOutline,
  PauseCircleOutline,
  PlayCircleOutline
} from '@ant-design/icons';
import AntdIcon from '@ant-design/icons-react';
import './style.scss';

interface ControlsProps extends Props<void> {
  onPlayPauseClick: () => void;
  onBackClick: () => void;
  onForwardClick: () => void;
  isPlaying: boolean;
}

const Controls: StatelessComponent<ControlsProps> = function Controls({
  onPlayPauseClick,
  onBackClick,
  onForwardClick,
  isPlaying
}) {
  const iconStyles = {
    color: 'white',
    width: '2em',
    height: '2em'
  };
  return (
    <div className="controls">
      <div className="back" onClick={onBackClick}>
        <AntdIcon type={BackwardOutline} style={iconStyles} />
      </div>
      <div className="playPause" onClick={onPlayPauseClick}>
        {isPlaying ? (
          <AntdIcon
            type={PauseCircleOutline}
            style={{ ...iconStyles, width: '3em', height: '3em' }}
          />
        ) : (
          <AntdIcon
            type={PlayCircleOutline}
            style={{ ...iconStyles, width: '3em', height: '3em' }}
          />
        )}
      </div>
      <div className="forward" onClick={onForwardClick}>
        <AntdIcon type={ForwardOutline} style={iconStyles} />
      </div>
    </div>
  );
};

export default Controls;
