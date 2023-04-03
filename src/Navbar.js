import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The React Blog</h1>
        <div className="links">
          {/* <a href="/">Home</a>
          <a href="/create">New Blog</a> */}
          {/* to handle routing on in the browser, and to intercept those requests for new pages. use 'link' */}
            <Link to="/">Home</Link>
            <Link to="/create" style={{ 
              color: 'white', 
              backgroundColor: '#f1356d',
              borderRadius: '8px' 
            }}>New Blog</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;