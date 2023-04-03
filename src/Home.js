import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // data:blogs means the property recieved is data but in this context call it blogs
    const { data:blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')
    

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isLoading && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
        </div>
     );
 }
 
export default Home;

