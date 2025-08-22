import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

export default function App() {
  //profile card
  //  circular profile icon
  //  user name and bio
  //
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className='App'>
      <Header isDrawerOpen={isDrawerOpen} buttonHandle={openDrawer}/>
      <Content isDrawerOpen = {isDrawerOpen}/>
      <Footer />
    </div>
  );
}

// Log to console
console.log('Hello console')