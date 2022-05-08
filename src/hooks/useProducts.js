import  { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
useEffect(() => {
    // const loadData =  () =>{
        const url = 'http://localhost:5000/warehouseproducts'
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     setProducts(data);
    // }
    // loadData();
    fetch(url).then(res => res.json()).then(data => setProducts(data))
},[])
    return [products, setProducts] ;
};

export default useProducts;