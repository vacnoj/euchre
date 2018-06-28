import React from 'react';
import Header from '../components/Header'
import SelectPlayer from '../components/SelectPlayer';

const LoginPage = () => {
    return(
      <div className="container">
      <Header />

      <SelectPlayer />  
      </div>
    )
};

export default LoginPage;