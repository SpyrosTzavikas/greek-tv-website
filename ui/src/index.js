import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Player } from 'video-react';
import HLSSource from './HLSSource';
import Select from 'react-select';


export default class StreamingVideoPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {stream: this.props.stream};
    }

    render() {
        console.log(this.props.stream);
        console.log(this.state.stream);

        return (
            <Player>
              <HLSSource
                isVideoChild
                src={this.state.stream}
              />
            </Player>
        );
    }
}

const options = [
  { value: 'https://glmxantennatvsec-lh.akamaihd.net/i/live_1@536771/master.m3u8', label: 'ANT1' },
  { value: 'http://ertlive.mdc.akamaized.net/ertlive/live1/ertlive/live1_480/chunks.m3u8', label: 'ERT1' },
  { value: 'http://freeview.ashttp9.visionip.tv/live/tvnetwork-hellenictv-nrg-hsslive-25f-4x3-SDh/chunklist.m3u8', label: 'ERT2' },
  { value: 'http://193.92.37.235:1935/LiveEdgeTV/live@720/master.m3u8', label: 'ALPHA' },
  { value: 'http://klive-a.akamaihd.net/dc-1/live/hls/p/713821/e/1_fp7fyi3j/sd/6000/t/4YED1wipGXOZMnV1TrhLhQ/index-s32.m3u8', label: 'STAR' },
  { value: 'https://epsilonlivehls.akamaized.net/hls/live/683532/stream1a/res0/playlist_res0.m3u8', label: 'EPSILON' },
  { value: 'http://anglantennalive5-lh.akamaihd.net/i/live_1@424766/master.m3u8', label: 'MAKEDONIA' },
  { value: 'http://master.cystreams.com:25461/live/GalaxyTV/GalaxyTV/184.m3u8', label: 'GALAXYTV' },
  { value: 'https://59252df7bc61b.streamlock.net/LampsiTV/LampsiTV/playlist.m3u8', label: 'LAMPSITV' },
  { value: 'http://v2.ciclano.io:1935/alphacinema/alphacinema/playlist.m3u8', label: 'ALPHA CINEMA' },

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
      <StreamingVideoPlayer stream={this.state.selectedOption["value"]} />
      <h1>{this.state.selectedOption["label"]}</h1>
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