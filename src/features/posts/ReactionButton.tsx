import { useDispatch } from "react-redux";
import { post, reactionAdded } from "./postsSlice";
import './post.css'

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButton = ({ post }: { post: post }) => {

    const dispatch = useDispatch()

    const reactionButton = Object.entries(reactionEmoji).map(([name, Emoji]) => {

        return (
            <button className="reactionbutton"
                key={name}
                type="button"
                onClick={() => dispatch(reactionAdded({ id: post.id, reaction: name }))}
            >
                <span>
                    {Emoji} 
                    {post.reactions[name]}
                </span>
            </button>
        )
    })

    return (
        <>{reactionButton}</>
    )
}
export default ReactionButton
