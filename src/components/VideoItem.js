import React from 'react';
import '../styles/components/VideoItem.css';

class VideoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    displayVideoItem(video) {
        
        if (!video) {
            return <div>Waiting for Search...</div>;
        } 

        const { snippet } = video;
        return (
            <>
                <img src={snippet.thumbnails.high.url} alt={snippet.description} />

                <p>{snippet.title}</p>
            </>
        )
    }

    render() {

        return (
            <div
                className="video-item__container"
                onClick={() => {
                    this.props.onVideoSelect(this.props.video);
                }}
            >
                <div className="video-item__content">
                    {this.displayVideoItem(this.props.video)}
                </div>
            </div>
        );
    };
}

export default VideoItem;


