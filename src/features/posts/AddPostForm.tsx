import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/userSlice";
import './post.css';

const AddPostForm = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const dispatch = useDispatch();

    const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onContentChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value)
    }

    const onAuthorChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUserId(e.target.value)
    }

    const users = useSelector(selectAllUsers)

    const onSavePostChanged = () => {

        if (title && content) {

            dispatch(
                postAdded(title, content)
            )
            setTitle('')
            setContent('')
        }
    }

    const usersOption = users.map((user) => (

        <div key={user.id}>
            <option value="">
                {user.name}
            </option>
        </div>
    ))
    
    return (
        <section className="section">
            <h2>Add a New Form</h2>
            <form className="form">
                <label className="label" htmlFor="postTitle">Post Title:</label>
                <input type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label className="label" htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOption}
                </select>
                <label className="label" htmlFor="postContent">Content:</label>
                <input type="text"
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostChanged}
                // disabled={}
                >Save Post</button>
            </form>
        </section>
    )
}
export default AddPostForm