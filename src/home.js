import { useEffect, useState } from "react"
import useFetch from "./useFetch";

const Home = () =>{

    const {isPending, content} = useFetch('https://internship-service.onrender.com/videos?page=1', {method: 'GET'}); 
    let preList;
    console.log(isPending)
    console.log(content)
    if(content){
        preList = content.data.posts.map((item) => {
            console.log(item.submission.thumbnail)
            return (
                <div className="item-div" key={item.postId}>
                    <div className="item-thumbnail">
                        <img src={item.submission.thumbnail} alt="" />
                    </div>
                    <div className="item-title">
                        {item.submission.title}
                    </div>
                    <div className="creator-name">
                        {item.creator.name}
                    </div>
                </div>
        )});
        console.log(preList);
        }



return(
    <div className="home">
         {isPending && (<div>Loading</div>)}
         {content && preList}
    </div>  
);

}

export default Home; 