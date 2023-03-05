import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // can be used for fetching data
    // runs the function on every render of the component
    useEffect(()=>{
        console.log('use effect run')
        // on changing the data, because of useState the component is re-rendered
        // and useEffect is run on every re-render

        console.log(blogs);
        // do not crud data here causes infinite loop because crud updates states => rerenders component => 
        // runs useEffect again => crud data => updates state => rerender => useState again
    })

    return ( 
        <div className="home">
            {/* handleDelete function is passed as a prop to src/BlogList.js */}
            <BlogList blogs={ blogs } title="All Blogs" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;