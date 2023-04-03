import {useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    // runs the function on every render of the component
    useEffect(()=>{
        console.log('use effect run')
        fetch('http://localhost:8000/blogs')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                // setBlogs here is not gonna create a continuous infinite loop of useEffect useState useEffect useState .... rerendering bec of the dependency list []
                setBlogs(data);
            })
    },[])

    return ( 
        <div className="home">
            {/* error as fetch is async meaning when Bloglist is accessed fetch will be running in the bg only and BlogList will have the initial value of null causing error*/}
            {/* <BlogList blogs={ blogs } title="All Blogs" handleDelete={handleDelete}/> */}
            {/* also removing handleDelete as this only deletes the blog from frontend, later gonna add code to delete it from the db */}

            {/* hence add `blog &&` aka conditional templating in react and in {} as to add js code in jsx. logical && evaluates left first */}
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
        </div>
     );
 }
 
export default Home;