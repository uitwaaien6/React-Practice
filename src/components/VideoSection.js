import React from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import '../styles/components/VideoSection.css';

class VideoSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="video-section__container">
                <div className="video-section__content">

                    <VideoDetail
                        video={this.props.selectedVideo}
                    />

                    <VideoList
                        videos={this.props.videos}
                        onVideoSelect={this.props.onVideoSelect}
                    />

                </div>
            </div>
        );
    }
}

export default VideoSection;
