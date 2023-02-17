//sfc: stateless function component
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The React Blog</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create" style={{
            // key value pairs
            color: "white",
            //not background-color like in css, '-' is minus in JS
            backgroundColor:  '#f1356d',
            borderRadius: '8px'
          }}>New Blog</a>
          {/* {} single braces for dynamic value */}
          {/* {{}} double for JS objects as dynamic values */}
        </div>
      </nav>
    );
  }
   
  export default Navbar;