import { useEffect, useState } from 'react';

const useProducts = (url) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(url).then(res => res.json()).then(data => {
            setProducts(data)
            setLoading(false)
        })
    }, [url])
    return { products, setProducts, loading };
};

export default useProducts;