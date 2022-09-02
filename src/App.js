import React from 'react';
import styles from './App.module.css';
import Customer from './components/Customer/Customer';
import NavBar from './components/Header/NavBar';

function App() {
  return (
  <>
    <header className={styles.mainHeader}>
      <NavBar/>
    </header>
    <main>
      <Customer/>
    </main>
  </>
  );
}

export default App;
