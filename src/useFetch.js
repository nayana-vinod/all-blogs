import {useState, useEffect } from "react";

// function that is the hook

//hooks in react have to have use word for it work
const useFetch = (url) =>{
        // to fetch any type of data like blogs, authors, etc and not just blogs
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // runs the function on every render of the component
    useEffect(()=>{

        // associate this with a specific fetch request so as to stop the fetch using abortcontroller
        const abortCont = new AbortController();

        // setTimeout for an extra 1sec lag so that the loading is more visible 
        setTimeout(() => {
            // signal is an optional argument
        fetch(url, { signal: abortCont.signal })
            .then(response => {
                if(!response.ok){
                    throw new Error('could not fetch the data for that resource')
                }
                return response.json();
            })
            // this and in setData called data, but that is fine as below is a local version so doesnt matter that the names clash
            .then(data => {
                console.log(data)
                setIsLoading(false);
                setData(data);
                setError(null);
            })
            // catches network error, try after stopping the json server
            .catch(err =>{
                if(err.name == 'AbortError'){
                    console.log('fetch aborted')
                } else {
                    setIsLoading(false);
                    setError(err.message);
                }
                
            })
        }, 1000);

        return () =>{
            console.log('cleanup')
            abortCont.abort();
            // fetch throws an error and is catching the error, there state is updated, and will still try to update the home component with that state meaning error will still be shown => use if else in catch like above
        }
    },[url]);
    // url added as dependency so that this is rerendered everytime url is changed, hence data from new url is fetched

    // return can be anything array, boolen, here it is an object with three properties
    // this could be an array instead, but with object the order it is returned or accessed need to be same as the name of the property is being mentioned directly
    return { data, isLoading, error }
}

export default useFetch;