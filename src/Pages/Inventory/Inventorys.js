import useProducts from '../../hooks/useProducts';
import Inventory from './Inventory';
import './Inventory.css'
import Loading from '../Shared/Loading/Loading';

const Inventorys = () => {
    const{products, setProducts, loading} = useProducts(`http://lit-harbor-73222.herokuapp.com/warehouseproducts`)
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to delete this product ?')
           if(confirm) {
            fetch(`http://lit-harbor-73222.herokuapp.com/warehouseproducts/${id}`,{
                method:"DELETE"
            }).then(res => res.json()).then(result => {
                const remaining = products.filter(product => product._id !== id)
                setProducts(remaining)
                console.log(result);
                })
           }
    }
    if(loading){
        return <Loading/>
    }
    return (
        <div className='inventory-products' style={{marginTop:'90px'}}>
            {
                products.map(product => <Inventory key={product._id} product = {product} handleDelete={handleDelete}/>)
            }
        </div>
    );
};

export default Inventorys;