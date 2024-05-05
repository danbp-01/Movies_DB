import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

const PublicRouter = () => {
  return (
    <div>
        <div> Public Router</div>
        <Outlet/>
    </div>
  );
};

export default PublicRouter;