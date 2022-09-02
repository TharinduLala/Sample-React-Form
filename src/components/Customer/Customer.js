import React from 'react'
import AddCustomer from './AddCustomer'
import CustomerTable from './CustomerTable'
import styles from './Customer.module.css';

const Customer = () => {
  return (
    <div className={styles.customer}>
        <AddCustomer/>
        <CustomerTable/>
    </div>
  )
}

export default Customer