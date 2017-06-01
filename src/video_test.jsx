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

        $('#mp4_video_html5_api').attr('webkit-playsinline', 'true').attr('playsinline', 'true');

        $('#m3u8_video_html5_api').attr('webkit-playsinline', 'true').attr('playsinline', 'true');
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
                <video id='mp4_video' className="video-js vjs-default-skin vjs-16-9" controls preload="none" >
                    <source src="http://localhost/oceans.mp4" type="video/mp4" />
                </video>
                <br />
                <video id="m3u8_video" className="video-js vjs-default-skin vjs-16-9" controls >
                    <source src="http://localhost/m3u8/t.m3u8" type="application/x-mpegURL" />
                </video>
                <br />
            </div >
        );
    }
}
