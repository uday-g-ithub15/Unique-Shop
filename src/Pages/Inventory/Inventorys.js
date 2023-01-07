import useProducts from '../../hooks/useProducts';
import Inventory from './Inventory';
import './Inventory.css'
import Loading from '../Shared/Loading/Loading';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Inventorys = () => {
    const { products, setProducts, loading } = useProducts(`https://unique-shop-server-production.up.railway.app/warehouseproducts`)
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to delete this product ?')
        if (confirm) {
            fetch(`https://unique-shop-server-production.up.railway.app/warehouseproducts/${id}`, {
                method: "DELETE"
            }).then(res => res.json()).then(result => {
                const remaining = products.filter(product => product._id !== id)
                setProducts(remaining)
            })
        }
    }
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <Header />
            <div className='inventory-products' >
                {
                    products.map(product => <Inventory key={product._id} product={product} handleDelete={handleDelete} />)
                }
            </div>
            <Footer />
        </>
    );
};

export default Inventorys;