import {useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, seIsLoading] = useState(true);

    // runs the function on every render of the component
    useEffect(()=>{
        // setTimeout for an extra 1sec lag so that the loading is more visible 
        setTimeout(() => {
            console.log('use effect run')
        fetch('http://localhost:8000/blogs')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                setBlogs(data);
                seIsLoading(false);
            })
        }, 1000);
    },[])

    return ( 
        <div className="home">
            { isLoading && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
        </div>
     );
 }
 
export default Home;