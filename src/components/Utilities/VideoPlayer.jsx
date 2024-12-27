"use client"
import { PauseCircle } from "@phosphor-icons/react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const option = {
        width: "300",
        height:"250"
    }
    return (
        <div className="fixed bottom-0 right-0">
            <button><PauseCircle size={32} /></button>
            <YouTube VideoId={youtubeId} 
            onReady={(event) => event.target.pauseVideo()}
            opts={option}/>
        </div>
    )
}

export default VideoPlayer