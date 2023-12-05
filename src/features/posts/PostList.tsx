import "./post.css";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
const PostsList = () =>{

    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map((post) =>(

        <article className="post-article" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <PostAuthor userId={post.id}/>
        </article>
    ))

    return(
        <section className="post">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
export default PostsList