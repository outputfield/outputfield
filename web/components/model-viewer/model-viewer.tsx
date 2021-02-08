import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}

interface Props {
  src: string | JSX.Element,
  poster?: string | JSX.Element
}

export const ModelViewer = ({
  src,
  poster
}: Props) =>{
  return(
    <div>
    <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
    <model-viewer src={src} poster={poster} camera-controls camera-orbit="-41.45deg 92.35deg 3.306m" min-camera-orbit="auto auto auto" max-camera-orbit="auto auto 3.306m">
      <div className="progress-bar hide" slot="progress-bar">
      <div className="update-bar"></div>
      </div>
      </model-viewer>
    </div>
  );

}
