import useProducts from '../../hooks/useProducts';
import Inventory from './Inventory';
import './Inventory.css'
import Loading from '../Shared/Loading/Loading';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Swal from 'sweetalert2';

const Inventorys = () => {
    const { products, setProducts, loading } = useProducts(`http://localhost:5000/warehouseproducts`)
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/warehouseproducts/${id}`, {
                    method: "DELETE"
                }).then(res => res.json()).then(result => {
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                })
                Swal.fire(
                    'Deleted!',
                    'This product has been deleted.',
                    'success'
                )
            }
        })
        // const confirm = window.confirm('Are you sure to delete this product ?')
        // if (confirm) {

        // }
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