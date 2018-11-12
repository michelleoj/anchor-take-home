import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import './style.scss';
import Playback from './playback';
import Controls from './controls';
import Tracklist from './tracklist';

class Player extends Component {
  public state = {
    isPlaying: false,
    tracks: [],
    selectedTrackId: null
  };

  public fetchMedia = () => {
    return fetch(
      'https://s3-us-west-2.amazonaws.com/anchor-website/challenges/bsb.json'
    );
  };

  public componentDidMount() {
    this.fetchMedia()
      .then(resp => resp.json())
      .then(data => {
        const tracks = data.tracks;
        const formattedTracks = [];
        tracks.forEach((track, id) => {
          const obj = { ...track };
          obj.type = track.mediaUrl.includes('video') ? 'video' : 'audio';
          obj.id = id;
          formattedTracks.push(obj);
        });
        this.setState({
          tracks: formattedTracks,
          selectedTrackId: 0
        });
      });
  }

  public onTrackClick = track => {
    this.setState({
      selectedTrack: track
    });
  };

  public onPlayPauseClick = () => {
    console.log('playing or pausing!');
    this.setState({
      isPlaying: !this.state.isPlaying
    });
  };

  public onBackClick = () => {
    console.log('back!');
  };

  public onForwardClick = () => {
    console.log('forward!');
  };

  public render() {
    const { tracks, selectedTrackId, isPlaying } = this.state;
    return isEmpty(tracks) ? (
      <div className="loading">Loading...</div>
    ) : (
      <div className="player">
        <Playback track={tracks[selectedTrackId]} />
        <Controls
          onPlayPauseClick={this.onPlayPauseClick}
          onBackClick={this.onBackClick}
          onForwardClick={this.onForwardClick}
          isPlaying={isPlaying}
        />
        <Tracklist
          tracks={tracks}
          selectedTrack={tracks[selectedTrackId]}
          onTrackClick={this.onTrackClick}
        />
      </div>
    );
  }
}

export default Player;
