import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

const PostsExcerpt = ({ postId }) => {
    const post = useSelector(state => selectPostById(state, postId))

    return (
        // <article>
        //     <h2>{post.title}</h2>
        //     <p className="excerpt">{post.body}...</p>
        //     <p className="postCredit">
        //         <Link to={`post/${post.id}`}>View Post</Link>
        //         <PostAuthor userId={post.userId} />
        //         <TimeAgo timestamp={post.date} />
        //     </p>
        //     <ReactionButtons post={post} />
        // </article>
        <div class="wrap__profile">
        <div class="wrap__profile-author">
            
            <figure>
                
                <img style={{height:'90px'}} src="https://www.pythoneasy.com/static/img/landing/avatar.png" alt="" class="img-fluid img-circle" />
            </figure>
            <div class="wrap__profile-author-detail">
                
                <div class="wrap__profile-author-detail-name">
                      <span style={{  textTransform: 'capitalize'}}><PostAuthor userId={post.userId} /> </span>
                     <p style={{fontWeight:'bold',fontSize:'8px'}}><TimeAgo timestamp={post.date} /></p>  
                     
                            </div>

                
                <h5>{post.title}</h5>
               <p className="excerpt">{post.body}</p>
                    
               <span style={{display:'flex'}}> <ul class="list-inline">
                <ReactionButtons post={post} />
                </ul>
                &nbsp;&nbsp; <Link to={`post/${post.id}`}><span style={{textDecoration:'underline'}}>Comments</span></Link>
                &nbsp;&nbsp; <Link to={`post/${post.id}`}><span style={{textDecoration:'underline'}}>View</span></Link>

                    </span>
            </div>
        </div>
        
    </div>
    )
}

export default PostsExcerpt