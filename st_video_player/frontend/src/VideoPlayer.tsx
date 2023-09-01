import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib";
import React, { ReactNode } from "react";
import VideoPlayer from "./Component";
interface State {}

class VideoPlayerComponent extends StreamlitComponentBase<State> {

  public componentDidMount(): void {
    Streamlit.setFrameHeight();
  }

  public render = (): ReactNode => {
    const height = this.props.args["height"];
    const width = this.props.args["width"];
    const videoData = this.props.args["videoBytes"];

    return (
      <div>
        <VideoPlayer videoBytes={videoData} width={width} height={height}/>
      </div>
    );
  };
}

export default withStreamlitConnection(VideoPlayerComponent);
