// making a custom hook so that all of the javascript
// written below can be used by another component for future 
// uses

//custom hooks need to start with the use keyword
//useEffect runs for every render
//runs on every render

import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) { // error coming back from server
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setData(data);
                    setError(null);
                })
                .catch(err => {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);
    }, [url])

    //whenever url changes, it re runs the entire function

    return { data, isPending, error };
}

export default useFetch;