import React from 'react';
import UserHeader from '../Components/UserHeader.jsx';
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer.jsx';

 const UserLayout=()=> {
  return (
    <div>
      <UserHeader />
      <main>
      
      <Outlet /> 

      </main>
   
      <Footer />\
    </div>
  );
}

export default UserLayout

