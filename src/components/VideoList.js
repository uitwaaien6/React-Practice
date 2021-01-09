import React from 'react';
import VideoItem from './VideoItem';
import '../styles/components/VideoList.css';

class VideoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };
    }

    displayVideoItems(videos) {

        if (!videos) {
            return <div>Waiting for Search...</div>;
        } 

        //videos.shift();
        //videos = [...videos];

        return videos.map((video, index) => (

            <VideoItem
                key={video.id.videoId || video.id.playlistId || index}
                video={video}
                onVideoSelect={this.props.onVideoSelect}
            />
            
        ));

    }

    render() {
        return (
            <div className="video-list__container">
                <div className="video-list__content">
                    {this.displayVideoItems(this.props.videos)}
                </div>
            </div>
        );
    }
}

export default VideoList;
