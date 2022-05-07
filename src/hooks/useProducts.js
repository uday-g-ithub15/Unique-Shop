import  { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
useEffect(() => {
    const loadData = async () =>{
        const url = `http://localhost:5000/warehouseproducts`
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
    }
    loadData();
},[])
    return [products, setProducts] ;
};

export default useProducts;