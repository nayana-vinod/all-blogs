import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // runs the function on every render of the component
    useEffect(()=>{
        console.log('use effect run')
        console.log(name); 
        // use depenedency array if run the fn for only first initial render
    // }, []);
    // second argument to useEffect() fn is an empty dependency array if no dependency
    
    },[name]);
    // with name as a dependency => if state of name changed => render using setName => run the function on render

    // button multiple times wont change the state as the updated data is louis now, and hence no more updating to louis again
    // ie useEffect will be run once only for the button to change name

    return ( 
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName('louis')}>change name</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;

// useEffect runs twice on refresh
// must be first initial render and another render for idk why