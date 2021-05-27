import { useState, useEffect } from 'react';

const useFetch = (url, defaultValue) => {
    const [state, setState] = useState(defaultValue);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setState(result);
                setIsLoading(false);
            }) //tova e === .then(setState)
            .catch(err => console.error(err));
    }, [url])

    return [
        state,
        isLoading,
    ]
}

export default useFetch;