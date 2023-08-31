import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib";
import React, { ReactNode } from "react";

interface State {}

class VideoPlayerComponent extends StreamlitComponentBase<State> {

  private videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props: any) {
    super(props);
    this.videoRef = React.createRef();
  }
  
  public componentDidMount(): void {
    const height = this.props.args["height"]
    Streamlit.setFrameHeight(height); // Adjust frame height to fit the content
  }

  public render = (): ReactNode => {
    const videoData = this.props.args["videoBytes"];
    
    const videoUrl = URL.createObjectURL(new Blob([videoData]));

    return (
      <div>
        <video
          style={{
            width: "100%", // Set the width to 100%
            objectFit: "contain",
          }}
          ref={this.videoRef}
          controls
          src={videoUrl}
        />
      </div>
    );
  };
}

export default withStreamlitConnection(VideoPlayerComponent);
