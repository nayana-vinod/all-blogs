// const BlogList = (props) => {
//     const blogs=props.blogs;
//     const title=props.title;
const BlogList = ({ blogs, title }) => {

    // console.log(props.blogs);

    return ( 
        <div className="blog-list">
            {/* can redefine blogs here too like in src/Home.js but no for obvious programming reasons */}
            {/* instead use props */}
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;