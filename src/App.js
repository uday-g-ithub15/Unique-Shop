import { Route, Routes } from 'react-router-dom';
import AddItem from './AddItem/AddItem';
import './App.css';
import Blogs from './Blogs/Blogs';
import Home from './Home/Home';
import Inventorys from './Inventory/Inventorys';
// import InventoryItem from './Home/HomePageItems/HomePageItems';
import ItemDetails from './InventoryItemDetails/ItemDetails';
import Login from './Login/Login';
import Register from './Login/Register';
import Error from './Shared/Error/Error';
import Footer from './Shared/Footer';
import Header from './Shared/Header/Header';
import PrivateRoute from './Shared/PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inventory' element={<Inventorys/>}/>
        <Route path='/inventory/:itemId' element={
          <PrivateRoute>
            <ItemDetails/>
          </PrivateRoute>
        }/>
        <Route path='/additem' element={
          // <PrivateRoute>
            <AddItem/>
          // </PrivateRoute>
        }/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route  path='*' element = {<Error/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
