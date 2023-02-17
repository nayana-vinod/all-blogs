const Home = () => {

    // handleMouseOver, handleSubmit: typical function names
    const handleClick = (e) =>{
        console.log("heyy!", e);
    }
    const handleClickAgain = (name, e) => {
        console.log('hello ' + name + e.target); //concatenate
        console.log(`hello ${name}` ); //template string instead of +
    }

    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <button onClick={handleClick}>Click me</button>
            {/* 
            above code sets a reference to the function, fn is invoked when clicked on the button only
            this below code with parenthesis invokes/fires the handleClick() function without needing to click on the button
            <button onClick={handleClick()}>Click me</button> */}
            
            {/* automatically passes 'e' parameter = event object on firing */}

            <button onClick={(e) => {
                handleClickAgain('miya', e)
            }}>Click me again</button>
            {/* handleClickAgain does not get an eventobject as handleClickAgain is not being referenced but the anonymous function by ()=>{} is 
            anonymous function gets access to the event object automatically*/}
            {/* 
            <button onClick={() => handleClickAgain('miya') }>Click me again</button>
            */}
        </div>
     );
}
 
export default Home;