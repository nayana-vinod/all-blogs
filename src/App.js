import './App.css';

function App() {
  // any valid js here
  const title = 'New Blog' ;
  const likes = 50;
  //any type like array, etc except bool and object

   // const person = { name: 'yoshi', age: 30 };
   const link = 'http://www.google.com';

  return (
    <div className="App">
      {/* className: camelcase */}
      {/* not 'class' like in html
      class is a keyword in JS, and this is basically a JS file.
      babel converts className into class in html for the dom */}
      <div className="content">
        {/* <h1>App Component</h1> */}
        <h1>WELCOME to { title }!</h1>
        <p>Liked { likes } times</p>

        {/* <p>{ person }</p> */}

        <p>{ 10 }</p>
        <p>{ "hello, ninjas" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        {/* dynamic values as attributes in element tags */}
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

// to import this in index.js
export default App;
