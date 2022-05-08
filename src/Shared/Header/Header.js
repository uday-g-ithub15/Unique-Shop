import React, {  useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const [hour, setHour] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')
  const date = new Date().toDateString()
  setInterval(() => {
    setHour(new Date().getHours())
    setMin(new Date().getMinutes())
    setSec(new Date().getSeconds())
  },1000)

  // setInterval(() => {
  // },1000);

  // setInterval(() => {
  // },1000);
   
const navLink = ({isActive}) => {
  return{
    backgroundColor:isActive ? '#B31217' : '',
    color:isActive ? '#fff' : ''
  }
}

    return (
        <nav >
            <div className='nav-content'>
            <NavLink style = {navLink} to={'/'}>Home</NavLink>
            <NavLink style = {navLink} to={'/about'}>About</NavLink>
            <NavLink style = {navLink} to={'/'}>Home</NavLink>
            <NavLink style = {navLink} to={'/blogs'}>Blogs</NavLink>
            </div>
            <div className="time">
             <h4>{hour}:{min}:{sec} </h4>
             <h5>{date}</h5>
            </div>
            <div className="user">
              <h4>Name</h4>
            </div>
        </nav>
    );
};

export default Header;