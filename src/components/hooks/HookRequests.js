import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchUrl() {
        const result = await axios.get(url);

        setData(result.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchUrl();
    }, []);
    return [data, loading];
}

export { useFetch };