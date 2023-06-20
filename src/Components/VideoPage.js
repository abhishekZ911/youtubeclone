import { useEffect, useState } from "react";
import {FaPlay} from "react-icons/fa";
import {AiOutlineLike} from "react-icons/ai";
import {BiCommentDetail} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const VideoPage = (props) => {

    const videoPost = props.post.submission.mediaUrl;
    const postMatched = props.post;
    const [ppButton, setppButton] = useState('play');
    const [ismoreDescription, setismoreDescription] = useState('more');
    const [description, setDescription] = useState(postMatched.submission.description.split(" ").splice(0, 10).join(" "));
    const [likes, setLikes] = useState(postMatched.reaction.count);
    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate();


    //For playing or pausing the video
    const PlayPause = (e) => {
        const videoElement = document.getElementsByClassName('video')[0];

        if(videoElement.paused){
            videoElement.play();
            setppButton('pause');
        }
        else{
            videoElement.pause();
            setppButton('play');
        }
    }
    
    
    //For lengthening or shortening description of the video
    const lengthenDescripton = () =>{
        if(ismoreDescription==='more'){
            setDescription(postMatched.submission.description);
            setismoreDescription('less');
        }

        else{
            setDescription(postMatched.submission.description.split(" ").splice(0, 10).join(" "));
            setismoreDescription('more');
        }
    }

    //To replay the video
    useEffect(() => {
        function handleVideoEnded() {
            videoElement.play();
        }

        const videoElement = document.getElementsByClassName('video')[0];
        videoElement.addEventListener('ended', handleVideoEnded)

        return () => videoElement.removeEventListener('ended', handleVideoEnded)
    }, [])

    const handleLiked = () =>{
        if(!isLiked){
            setLikes(() => likes+1)
            setIsLiked(true);
        }
        else{
            setLikes(() => likes-1)
            setIsLiked(false);
        }
        
    }

    const style = {color: "white",opacity: '0.7', zIndex: "1"};

    //Navigating programmatically
    const handleGoToHome =() =>{
        navigate(`/${props.backUrl.pageId}`);
    }

    return (<>
    {postMatched && (
        <div className="media-div">
                <div className="video-bar">
                    <div className="back-icon" onClick={handleGoToHome}>
                         <h2>{<BiArrowBack/>}</h2>
                    </div>
                    <div className="icon" onClick={PlayPause}>
                        <h2>{ppButton==='play' && <FaPlay style={style}/>}</h2>
                    </div>
                    <video className="video" width="100%" onClick={PlayPause}>
                        <source src={videoPost} type="video/mp4"/>
                    </video>
                    <div className="video-description">
                        {description}
                        <button onClick={lengthenDescripton}> ...{ismoreDescription}</button>
                    </div>
                    <div className="creator-details" id={postMatched.creator.id}>
                        <img src={postMatched.creator.pic} className="creator-photo" alt="" />
                        <h4 className="creator-handle">@{postMatched.creator.handle}</h4>
                    </div>
                    <div className="sidebar">
                        <div className="liked">
                            <h2 onClick={handleLiked}><AiOutlineLike/></h2>
                            <h5>{likes}</h5>
                        </div>
                        <div className="comment">
                            <h2><BiCommentDetail/></h2>
                            <h5>{postMatched.comment.count}</h5>
                        </div>
                        <div >
                            <img className="creator-photo" src={postMatched.creator.pic} alt="" />
                        </div>
                    </div>        
        </div>
    </div>)}
    </>);
}

export default VideoPage;