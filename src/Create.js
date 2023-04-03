import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
//   mario because it should one of the selectable values from 'option' tag as the default value, meaning same spelling etc
  const [author, setAuthor] = useState('yoshi');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    // default is to refresh the page
    e.preventDefault();
    const blog = { title, body, author }; //create a new object
    // no need to add id property as when a POST request is made to the JSON server a unique id is automatically added

    console.log(blog);
    // can rewrite useFetch hook to handle POST requests and make it a more universal hook but can be created here as this fetch is done only once in this project
    setIsLoading(true);
    
    // setTimeout to artificially lag the POST request so as to see the loading button
    setTimeout(() => {
        fetch('http://localhost:8000/blogs/', {
        method: 'POST',
        //   type of data to be POST is json
        headers: { "Content-Type": "application/json" },
        //   converts the blog object to a JSON string
        body: JSON.stringify(blog)
        }).then(() => {
        // console.log('new blog added');
        // setIsLoading(false);
        
        // history.go(-1);
        history.push('/');
        })
    }, 500)
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      {/* can also use a button and onclick event but onSubmit exists*/}
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
        //   without onChange value cannot be changed or deleted
          onChange={(e) => setTitle(e.target.value)}
        //   target is this input tag. where event happened.that target which is input.value property
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { !isLoading && <button>Add Blog</button> }
        { isLoading && <button disabled>Adding blog...</button> }
      </form>
    </div>
  );
}
 
export default Create;