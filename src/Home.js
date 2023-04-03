import {useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // runs the function on every render of the component
    useEffect(()=>{
        // setTimeout for an extra 1sec lag so that the loading is more visible 
        setTimeout(() => {
        fetch('http://localhost:8000/blogs')
            .then(response => {
                if(!response.ok){
                    throw new Error('could not fetch the data for that resource')
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
                setIsLoading(false);
                setBlogs(data);
                setError(null);
            })
            // catches network error, try after stopping the json server
            .catch(err =>{
                setIsLoading(false);
                setError(err.message);

            })
        }, 1000);
    },[])

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isLoading && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
        </div>
     );
 }
 
export default Home;