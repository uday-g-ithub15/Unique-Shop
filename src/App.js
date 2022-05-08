import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Blogs/Blogs';
import Home from './Home/Home';
import InventoryItem from './Home/HomePageItems/HomePageItems';
import Login from './Login/Login';
import Register from './Login/Register';
import Error from './Shared/Error/Error';
import Footer from './Shared/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/inventory' element={<InventoryItem/>}/>
        <Route  path='*' element = {<Error/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
