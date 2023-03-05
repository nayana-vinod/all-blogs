import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    return ( 
        <div className="home">
            {/* passing blogs as prop which is "blogs = { blogs }" */}
            {/* <BlogList blogs = { blogs } /> */}

            {/* passing multiple props */}
            <BlogList blogs={ blogs } title="All Blogs" />
            
            {/* useful for like search pages where blog.title === the search term */}
            <BlogList blogs={ blogs.filter((blog)=> blog.author === 'mario') } title="Mario's Blogs" /> 
        </div>
     );
}
 
export default Home;