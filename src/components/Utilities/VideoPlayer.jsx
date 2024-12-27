"use client"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const option = {
        width: "300",
        height:"250"
    }
    return (
        <div className="fixed bottom-2 right-2">
            <button className="text-color-primary float-right mr-1 mb-1 bg-color-secondary px-3">
                X
            </button>
            <YouTube VideoId={youtubeId} 
            onReady={(event) => event.target.pauseVideo()}
            opts={option}/>
        </div>
    )
}

export default VideoPlayer