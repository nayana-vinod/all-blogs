import { useState } from "react";
//to make variables reactive 
// reactive value: something that might change its value at some point

const Home = () => {
    // let name = 'miya';

    // can use the same hook in a component for diff values
    // datatype of state can be anything, object, boolean, etc
    const [name, setName] = useState('miya'); //initial value=' miya'
    //save it in an array destructuring to store two values this hook returns
    //name: any var for storing initial value 'miya'
    // setVariable: function to change variable (typical format)

    const [age, setAge] = useState(25);

    const handleClick = (e) =>{
        // name = 'louis';
        // console.log(name); 
        //without useState hook, the value of name will be changed but
        // wont be reflected in the page
        // as after the change, the component is not re-rendreded
        setName('louis');
        setAge(30);
    }
 
    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;