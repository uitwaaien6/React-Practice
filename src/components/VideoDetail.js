import React from 'react';
import '../styles/components/VideoDetail.css';

class VideoDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    displayVideo(video) {
        if (!video) {
            return <div>Waiting For Search or Select Video...</div>;
        } 

        const { snippet } = video;
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        
        return (
            <>
                <iframe title={snippet.title} src={videoSrc} />

                <h4>{snippet.title}</h4>

                <p>{snippet.description}</p>
            </>
        );
    }

    render() {
        return (
            <div className="video-detail__container">
                <div className="video-detail__content">
                    {this.displayVideo(this.props.video)}
                </div>
            </div>
        );
    }
}

export default VideoDetail;
