import './index.css';
import Navbar from './Navbar';
import Home from './Home';
// as Router meaning can use BrowserRouter by the name 'Router' here
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

// surround the div with Router component so that Router is accessible in the whole app or everything inside Router div
function App() {
  return (
      <Router>
         <div className="App">

            <Navbar></Navbar>
            {/* or <Navbar/> self closed*/}
            <div className="content">
              {/*page content should go to div content when we go to different pages */}
                {/* <Home/> */}
                {/* Switch makes sure that only one route shows at any one time now */}
                <Switch>
                    {/* set up individual routes using the Route component imported from react-router-dom*/}
                    {/* exact is added because with '/create', in the browser url search, react router will check and finds that it matches with '/' and shows the home page instead. so to exactly match with '/', and only then home page is shown, use the keyword exact*/}
                    <Route exact path="/">
                        {/* next the component inside the Route when the user visits this Route */}
                        <Home/>
                    </Route>

                    <Route path="/create">
                        <Create/>
                    </Route>
                    {/* route parameter id */}
                    <Route path="/blogs/:id">
                        <BlogDetails/>
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </div>
        </div>
      </Router>
  );
}

// to import this in index.js
export default App;
