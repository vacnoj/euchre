import React from 'react';
import Header from '../components/Header'
import SelectPlayer from '../components/SelectPlayer';

const Welcome = () => {
    return(
      <div className="container">
      <Header />
      <h1>Select your player!</h1>

      <SelectPlayer />  
      </div>
    )
};

export default Welcome;