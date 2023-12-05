import { useState } from "react"



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
        <section>
            <h2>Add a New Form</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input type="text"
                id="postTitle" 
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <input type="text"
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}
                />
                <button
                type="button"
                onClick={onSavePostClicked}
                disabled={!conSave}
                >Save Post</button>
            </form>           
        </section>
    )
}
