import { useState } from "react"
import './post.css'


const AddPostForm = () =>{

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onContentChanged = (e:React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value)
    }

    return(
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
                <label className="label" htmlFor="postContent">Content:</label>
                <input type="text"
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}
                />
                <button
                type="button"
                onClick={()=>{}}
                // disabled={}
                >Save Post</button>
            </form>           
        </section>
    )
}
export default AddPostForm