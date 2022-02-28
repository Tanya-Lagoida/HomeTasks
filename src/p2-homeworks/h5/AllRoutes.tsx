import React from 'react';
import { Route,  Routes } from "react-router-dom";
import { Error404 } from './pages/Error404';
import { PreJunior } from './pages/PreJunior';
import { Junior } from './pages/Junior';
import { JuniorPlus } from './pages/JuniorPlus';


export function AllRoutes() {
  return (

      <Routes>

        <Route path={'/'}
               element={<PreJunior/>}/>
        <Route path={'/pre_junior'}
               element={<PreJunior/>}/>
        <Route path={'/junior'}
               element={<Junior/>}/>
        <Route path={'/junior_plus'}
               element={<JuniorPlus/>}/>
        <Route element={<Error404/>}/>

      </Routes>
  );
}

