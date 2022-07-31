import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice';
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SinglePostPage = () => {
    const { postId } = useParams()

    const post = useSelector((state) => selectPostById(state, Number(postId)))

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (

    <div class="wrap__profile">
    <div class="wrap__profile-author">
    <figure>
    
                <img style={{height:'90px'}} src="https://i0.wp.com/betterthanblended.com/wp-content/uploads/2017/05/Icons-01.png?w=1080&ssl=1" alt="" class="img-fluid img-circle" />
            </figure>
        <article class="wrap__profile-author-detail" >
        <p style={{fontWeight:'bold',float:'right'}} className="postCredit">
            
            {/* if statment will be here */}
        &nbsp;&nbsp;  . <Link to={`/posts/edit/${post.id}`}>Edit Post</Link>
               
            </p>   
            <span style={{  textTransform: 'capitalize'}}><PostAuthor userId={post.userId} /> </span>
              <TimeAgo timestamp={post.date} /> 
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            
            <ReactionButtons post={post} />
            <br/>
            
            <input type={'text'} placeholder={'Add a comment...'}></input>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
        </article>
        </div>
        

        </div>
        
    )
}

export default SinglePostPage