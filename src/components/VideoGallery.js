import React from 'react'
import './videoGallery.css'

const VideoGallery = () => {
    return (
        <div className="video-gallery">
            <h1>Learn Knitting with Vardhman</h1>
            <div className="video-container">
                <div className="video">
                    <video src="" controls="controls" autoPlay="false" />
                </div>
                <div className="video">
                    <video src="" controls="controls" autoPlay="false" />
                </div>
            </div>
        </div>
    )
}

export default VideoGallery
