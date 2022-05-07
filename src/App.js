import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Blogs/Blogs';
import Home from './Home/Home';
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
        <Route  path='*' element = {<Error/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
