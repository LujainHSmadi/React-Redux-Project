import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

const PostsExcerpt = ({ postId }) => {
    const post = useSelector(state => selectPostById(state, postId))
console.log(post);
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
        <>
        <div  style={{ border:'1.5px solid ',borderRadius:'15px',padding:'15px'}} class="wrap__profile">
        <div class="wrap__profile-author">

            <figure>

                <img style={{ height: '90px', width: '90px' }} src="https://i0.wp.com/betterthanblended.com/wp-content/uploads/2017/05/Icons-01.png?w=1080&ssl=1" alt="" class="img-fluid img-circle" />
            </figure>
            <div class="wrap__profile-author-detail">

                <div class="wrap__profile-author-detail-name">
                    <span style={{ textTransform: 'capitalize' }}><PostAuthor userId={post.userId} /> </span>
                    <p style={{ fontWeight: 'bold', fontSize: '8px' }}><TimeAgo timestamp={post.date} /></p>
                </div>



                <p style={{ border: '1px inset', padding: '15px' }} className="excerpt"><h5>{post.title}</h5>{post.body}</p>
                <span style={{ display: 'flex', }}> 
                <ul  class="list-inline">
                  <p  style={{backgroundColor:'beige'}}><ReactionButtons post={post} /></p>  
                </ul>
                    &nbsp;&nbsp; <Link to={`post/${post.id}`}><span style={{backgroundColor:'beige',padding: '1px'}} >Comment</span></Link>
                    &nbsp;&nbsp; <Link to={`/posts/${post.id}`}><span style={{backgroundColor:'beige',padding: '1px'}} >View</span></Link>

                </span>
            </div>
        </div>
       
    </div>
    <br/><br/>
    </>
    )
}

export default PostsExcerpt

