import React, { StatelessComponent, Props } from 'react';
import {
  VerticalLeftOutline,
  VerticalRightOutline,
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
  return (
    <div className="controls">
      <div className="back" onClick={onBackClick}>
        <AntdIcon type={VerticalRightOutline} />
      </div>
      <div className="playPause" onClick={onPlayPauseClick}>
        {isPlaying ? (
          <AntdIcon type={PauseCircleOutline} />
        ) : (
          <AntdIcon type={PlayCircleOutline} />
        )}
      </div>
      <div className="forward" onClick={onForwardClick}>
        <AntdIcon type={VerticalLeftOutline} />
      </div>
    </div>
  );
};

export default Controls;
