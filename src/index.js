import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css'
import { Navigate, Routes, Route, BrowserRouter } from 'react-router-dom'

import Baitap1 from './ReactBuoi1/Baitap1';
import Baitap2 from './BaiTapState/Baitap2';
import BaitapProps from './Props/BaitapProps';
import HomeTemplate from './templates/HomeTemplate'
import FormCreateSv from './pages/Form/FormCreateSV'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <Routes>
      <Route path='' element={<HomeTemplate />}>
        <Route index element={<Baitap1 />} />
        <Route path='baitap1' element={<Baitap1 />} />
        <Route path='baitapState' element={<Baitap2 />} />
        <Route path="baitapProps" element={<BaitapProps />} />
        <Route path="form" element={<FormCreateSv />} />
      </Route>
    </Routes>
  </BrowserRouter >
  // <div>
  //   {/* <Baitap1 /> */ }
  //  {/* <Baitap2 /> */ }
  // {/* <BaitapProps /> */ }
  // </div>


);

