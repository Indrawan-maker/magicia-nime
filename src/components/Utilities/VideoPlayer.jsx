"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button
                    onClick={handleVideoPlayer}
                    className="text-color-primary float-right mr-1 mb-1 bg-color-secondary px-3">
                    X
                </button>
                <YouTube VideoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option} 
                    onError={() => alert("Video is not avaible for now, please try later")}
                    />
                    
            </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return (
    <button onClick={handleVideoPlayer}
    className="fixed bottom-5 text-xl font-bold p-2 rounded-xl hover:bg-color-accent transition-all shadow-xl right-5 w-32 bg-color-primary text-color-dark">
        Tonton Trailer
        </button>
        )
    }

    return isOpen ? <Player/> : <ButtonOpenPlayer/>
}

export default VideoPlayer