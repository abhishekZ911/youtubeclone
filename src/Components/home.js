import { useEffect, useState } from "react"
import useFetch from "../useFetch";
import { Link, useParams } from "react-router-dom";
import Pagination from "./Pagination";
import {AiFillPlayCircle} from 'react-icons/ai';

const Home = () =>{
    const params = useParams();
    const pageId = params.pageId;
    const [currentPage, setCurrentPage] = useState(pageId);
    console.log(currentPage)
    let preList;
    
    useEffect(() => {
        //Listen for changes in the URL parameters (pageId)
        setCurrentPage(pageId)
    }, [pageId])


    //Fetching data from API using the custom made hook useFetch
    const url = 'https://internship-service.onrender.com/videos?page=' + (currentPage - 1);
    const {isPending, content} = useFetch(url, {method: 'GET'}); 



    //Mapping of the content or objects into html code
    if(content){
        preList = content.data.posts.map((item) => {
            const postId = item.postId;
            return (
                <Link to={`/${Number(pageId)}/${postId}` } state={{post: {item}, backUrl: {pageId} }} key={item.postId}>
                <div className="item-div" id={item.postId} key={item.postId}>
                    <div className="item-thumbnail">
                        <img src={item.submission.thumbnail} alt="" />
                    </div>
                    <div className="item-detail">
                        <div className="item-title">
                            {item.submission.title}
                        </div>
                        <div className="creator-name">
                            By : {item.creator.name}
                        </div>
                    </div>
                    <div className="on-hover">
                        <div className="content"><AiFillPlayCircle/></div>
                    </div>
                </div>
                </Link>
        )});
        }


        const handlePaginationBarClick = (pageNumber) => setCurrentPage(pageNumber)


return(<>

{!isPending && <Pagination handlePaginationBarClick={handlePaginationBarClick}/> }

    {isPending  && <div className="Loading-Page">Loading...</div>}
    <div className="home" >
         {content && preList}
    </div>
      
    </>
);

}

export default Home; 