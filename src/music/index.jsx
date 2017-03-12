import React from 'react'
import './css/jplayer.blue.monday.css'
import $ from 'jquery'

export default class Music extends React.Component {

    componentDidMount() {
        $("#jquery_jplayer_1").jPlayer("setMedia", {
            title: "Bubble",
            m4a: require("../assets/Miaow-07-Bubble.m4a"),
            oga: require("../assets/Miaow-07-Bubble.ogg")
        });
        $("#jquery_jplayer_1").jPlayer("play");

    }

    render() {
        return (
            <div id="jp_container_1" className="jp-audio" role="application" aria-label="media player">
                <div className="jp-type-single">
                    <div className="jp-gui jp-interface">
                        <div className="jp-controls">
                            <button className="jp-play" role="button" tabIndex="0">play</button>
                            <button className="jp-stop" role="button" tabIndex="0">stop</button>
                        </div>
                        <div className="jp-progress">
                            <div className="jp-seek-bar">
                                <div className="jp-play-bar"></div>
                            </div>
                        </div>
                        <div className="jp-volume-controls">
                            <button className="jp-mute" role="button" tabIndex="0">mute</button>
                            <button className="jp-volume-max" role="button" tabIndex="0">max volume</button>
                            <div className="jp-volume-bar">
                                <div className="jp-volume-bar-value"></div>
                            </div>
                        </div>
                        <div className="jp-time-holder">
                            <div className="jp-current-time" role="timer" aria-label="time">&nbsp;</div>
                            <div className="jp-duration" role="timer" aria-label="duration">&nbsp;</div>
                            <div className="jp-toggles">
                                <button className="jp-repeat" role="button" tabIndex="0">repeat</button>
                            </div>
                        </div>
                    </div>
                    <div className="jp-details">
                        <div className="jp-title" aria-label="title">&nbsp;</div>
                    </div>
                    <div className="jp-no-solution">
                        <span>Update Required</span>
                        To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
		                </div>
                </div>
            </div>
        );
    }
}

