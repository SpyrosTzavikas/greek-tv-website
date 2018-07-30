import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Player } from 'video-react';
import HLSSource from './HLSSource';
import Select from 'react-select';
import "../node_modules/video-react/dist/video-react.css"; // import css


export default class StreamingVideoPlayer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        this.refs.player.load();
        this.refs.hlsSource.reloadNewSource();
    }

    render() {
        console.log("PROPS: " + this.props.stream);

        return (
            <Player ref="player">
              <HLSSource ref="hlsSource"
                isVideoChild
                src={this.props.stream}
              />
            </Player>
        );
    }
}

const options = [
  { value: 'http://glmxantennatvsec-lh.akamaihd.net/i/live_1@536771/master.m3u8', label: 'ANT1' },
  { value: 'http://freeview.ashttp9.visionip.tv/live/tvnetwork-hellenictv-nrg-hsslive-25f-4x3-SDh/chunklist.m3u8', label: 'ERT2' },
  { value: 'http://193.92.37.235:1935/LiveEdgeTV/live@720/master.m3u8', label: 'ALPHA' },
  { value: 'http://klive-a.akamaihd.net/dc-1/live/hls/p/713821/e/1_fp7fyi3j/sd/6000/t/4YED1wipGXOZMnV1TrhLhQ/index-s32.m3u8', label: 'STAR' },
  { value: 'http://epsilonlivehls.akamaized.net/hls/live/683532/stream1a/res0/playlist_res0.m3u8', label: 'EPSILON' },
  { value: 'http://anglantennalive5-lh.akamaihd.net/i/live_1@424766/master.m3u8', label: 'MAKEDONIA' },
  { value: 'http://master.cystreams.com:25461/live/GalaxyTV/GalaxyTV/184.m3u8', label: 'GALAXYTV' },
];

class ChannelSelectMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: options[0],
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    return (
    <div>
      <Select
        value={this.state.selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      <h3>Προβάλλεται τωρα: {this.state.selectedOption["label"]}</h3>
      <StreamingVideoPlayer stream={this.state.selectedOption["value"]} />
    </div>
    );
  }
}

ReactDOM.render(
<div>
  <h1>Κανάλια Ελληνικής Τηλεόρασης</h1>
  <div>
    <ChannelSelectMenu />
  </div>
</div>,
  document.getElementById('root')
);