import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home'
import Inventorys from './Pages/Inventory/Inventorys';
import ItemDetails from './Pages/InventoryItemDetails/ItemDetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import MyItems from './Pages/MyItem/MyItems';
import Error from './Pages/Shared/Error/Error';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import AddItem from './Pages/AddItem/AddItem';
import Dashboard from './Pages/Home/Dashboard/Dashboard';
import HomePageItems from './Pages/Home/HomePageItems/HomePageItems';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/home/#dashboard' element={<Dashboard />} />
      <Route path='/home/#sampleproducts' element={<HomePageItems />} />
      <Route path='/manageinventories' element={<Inventorys />} />
      <Route path='/inventory/:itemId' element={
        <PrivateRoute>
          <ItemDetails />
        </PrivateRoute>
      } />
      <Route path='/additem' element={
        <PrivateRoute>
          <AddItem />
        </PrivateRoute>
      } />
      <Route path='/myitem' element={
        <PrivateRoute>
          <MyItems />
        </PrivateRoute>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
