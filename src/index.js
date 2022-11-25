import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css'
import { Navigate, Routes, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/configStore';

import Baitap1 from './ReactBuoi1/Baitap1';
import Baitap2 from './BaiTapState/Baitap2';
import BaitapProps from './Props/BaitapProps';
import HomeTemplate from './templates/HomeTemplate'
import BaiTapFormSv from './pages/Form/BaiTapFormSv'
import FormRedux from './pages/FormRedux/FormRedux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter >
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<BaiTapFormSv />} />
          <Route path='formredux' element={<FormRedux />} />

          <Route path='baitap1' element={<Baitap1 />} />
          <Route path='baitapState' element={<Baitap2 />} />
          <Route path="baitapProps" element={<BaitapProps />} />
          <Route path="baitapForm" element={<BaiTapFormSv />} />
        </Route>
      </Routes>
    </BrowserRouter >
  </Provider>


);

