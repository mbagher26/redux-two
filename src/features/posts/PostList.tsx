import "./post.css";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostsList = () => {

    const posts = useSelector(selectAllPosts)

    const orderposts = posts.posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    const renderedPosts = orderposts.map((post) => (

        <article className="post-article" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="p">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionButton post={post}/>
        </article>
    ))

    return (
        <section className="post">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
export default PostsList