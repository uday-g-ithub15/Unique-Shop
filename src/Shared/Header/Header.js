import { signOut } from 'firebase/auth';
import React, {  useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth)
  // console.log(user);
  const [hour, setHour] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')
  const date = new Date().toDateString()
  setInterval(() => {
    setHour(new Date().getHours())
    setMin(new Date().getMinutes())
    setSec(new Date().getSeconds())
  },1000)
   
const navLink = ({isActive}) => {
  return{
    backgroundColor:isActive ? '#B31217' : '',
    color:isActive ? '#fff' : ''
  }
}
const logout = () => {
  signOut(auth);
};

    return (
        <nav >
            <div className='nav-content'>
            <NavLink style = {navLink} to={'/'}>Home</NavLink>
            <NavLink style = {navLink} to={'/about'}>About</NavLink>
            <NavLink style = {navLink} to={'/inventory'}>Inventorys</NavLink>
            <NavLink style = {navLink} to={'/blogs'}>Blogs</NavLink>
            </div>
            <div className="time">
             <h4>{hour}:{min}:{sec} </h4>
             <h5>{date}</h5>
            </div>
            <div className="user">
              {user && <h4>Name:{user?.displayName || 'No Name'}</h4>}
              {user && <><h3><button onClick={logout}>Logout</button></h3></>}
            </div>
        </nav>
    );
};

export default Header;