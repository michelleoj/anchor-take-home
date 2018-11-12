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
      selectedTrackId: track.id
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
    this.setState({
      selectedTrackId: this.getSelectedIndex(this.state.selectedTrackId - 1)
    });
  };

  public onForwardClick = () => {
    console.log('forward!');
    this.setState({
      selectedTrackId: this.getSelectedIndex(this.state.selectedTrackId + 1)
    });
  };

  public getSelectedIndex = i => {
    const n = this.state.tracks.length;
    return ((i % n) + n) % n;
  };

  public render() {
    const { tracks, selectedTrackId, isPlaying } = this.state;
    const selectedTrack = tracks[selectedTrackId];
    console.log(selectedTrack, selectedTrackId, tracks);
    return isEmpty(tracks) ? (
      <div className="loading">Loading...</div>
    ) : (
      <div className="player">
        <div className="playerBackground">
          <div className="overlay" />
          <div
            className="backgroundImage"
            style={{
              backgroundImage: `url(${selectedTrack.imageUrl})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              filter: 'blur(20px)'
            }}
          />
        </div>
        <div className="playerMain">
          <Playback track={selectedTrack} />
          <Controls
            onPlayPauseClick={this.onPlayPauseClick}
            onBackClick={this.onBackClick}
            onForwardClick={this.onForwardClick}
            isPlaying={isPlaying}
          />
          <Tracklist
            tracks={tracks}
            selectedTrack={selectedTrack}
            onTrackClick={this.onTrackClick}
          />
        </div>
      </div>
    );
  }
}

export default Player;
