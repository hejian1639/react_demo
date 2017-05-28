import React from 'react'

import videojs from 'video'
import 'css!video-js'
import 'videojs-contrib-hls'
import { Button } from 'react-bootstrap';
import cssAPI from 'css-require'



export default class VideoTest extends React.Component {
    componentWillMount() {
        this.bootstrap = cssAPI.load('lib/bootstrap');
        this.bootstrapTheme = cssAPI.load('lib/bootstrap-theme');
    }

    componentDidMount() {
        $('#pageLoading').hide();
        this.mp4Player = videojs('mp4_video');
        this.m3u8Player = videojs('m3u8_video');
        // player.play();
    }

    // destroy player on unmount
    componentWillUnmount() {
        cssAPI.unload(this.bootstrap);
        cssAPI.unload(this.bootstrapTheme);

        if (this.mp4Player) {
            this.mp4Player.dispose()
        }

        if (this.m3u8Player) {
            this.m3u8Player.dispose()
        }
    }

    dispose() {
        if (this.mp4Player) {
            this.mp4Player.dispose()
            this.mp4Player = null;
        }

        if (this.m3u8Player) {
            this.m3u8Player.dispose()
            this.m3u8Player = null;
        }
    }

    render() {
        return (
            <div >
                <Button ref="refresh" bsStyle="primary"
                    onClick={this.dispose.bind(this)}>
                    dispose
                    </Button>
                <br />
                <br />
                <video id='mp4_video' width='600' height='300' className="video-js vjs-default-skin" controls preload="none" width="640" height="360">
                    <source src="http://localhost/oceans.mp4" type="video/mp4" />
                </video>
                <br />
                <video id="m3u8_video" width='600' height='300' className="video-js vjs-default-skin" controls data-setup='{"example_option":true}'>
                    <source src="http://localhost/m3u8/t.m3u8" type="application/x-mpegURL" />
                </video>
                <br />
            </div >
        );
    }
}
