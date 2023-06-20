import { useLocation } from "react-router-dom";
import VideoPage from "./VideoPage";


const VideoComponent = () => {

  const location = useLocation();
  const data = location.state;
  const postMatched = data.post.item;
  
  return (postMatched && <VideoPage post={postMatched} backUrl={data.backUrl}/>)
};

export default VideoComponent;
