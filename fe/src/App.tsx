import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import RouterComponent from './Router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Navbar></Navbar>
      <RouterComponent />
      <Footer></Footer>
    </div>
  );
};

export default App;
