import React from 'react'
import styles from './NavBar.module.css';

const NavBar = () => {
    const onHomeClick =(event)=>{
        event.preventDefault();
    }
    const onCustomerClick =(event)=>{
        event.preventDefault();
    }
    const onItemClick =(event)=>{
        event.preventDefault();
    }
  return (
    <nav className={styles.nav}>
        <ul>
            <li><a href='/' onClick={onHomeClick} >Home</a></li>
            <li><a href='/' onClick={onCustomerClick}>Customer</a></li>
            <li><a href='/' onClick={onItemClick}>Item</a></li>
        </ul>
    </nav>
  )
}

export default NavBar;