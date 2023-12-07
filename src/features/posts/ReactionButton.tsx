import { useDispatch } from "react-redux";
import { postState, reactionAdded } from "./postsSlice";
import './post.css'

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButton = ({ post }: { post: postState }) => {

    const dispatch = useDispatch()

    const reactionButton = Object.entries(reactionEmoji).map(([name, Emoji]) => {

        return (
            <button className="button-reaction"
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
