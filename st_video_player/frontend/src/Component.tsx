import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoBytes: Uint8Array;
  width: number;
  height: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoBytes, width, height}) => {
  const [videoUrl, setVideoUrl] = useState<string>("");

  useEffect(() => {
    // Create a blob URL from the video bytes
    const videoBlob = new Blob([videoBytes], { type: "video/mp4" });
    const videoDataUrl = URL.createObjectURL(videoBlob);
    setVideoUrl(videoDataUrl);
  }, [videoBytes]);

  return (
      <ReactPlayer 
        url={videoUrl} 
        controls 
        width={width} 
        height={height}
        />
  );
};

export default VideoPlayer;
