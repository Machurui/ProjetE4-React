import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './Pages/Accueil';
import NewPartie from './Pages/NewPartie';
import JoinPartie from './Pages/JoinPartie';
import DashboardPartie from './Pages/DashboardPartie';
import Story from './Pages/Story/Story';
import Sprint from './Pages/Sprint/Sprint';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<Accueil />} />
        {/* <Route path='*' element={<NotFound />} /> */}
        <Route path='/newpartie' element={<NewPartie />} />
        <Route path='/joinpartie' element={<JoinPartie />} />
        <Route path='/dashboardpartie/:id' element={<DashboardPartie />} />
        <Route path='/dashboardpartie/:id/story' element={<Story />} />
        <Route path='/dashboardpartie/:id/sprint' element={<Sprint />} />
        <Route path='/dashboardpartie/:id/start' element={<Sprint />} />
        <Route path='/dashboardpartie/:id/daily' element={<Sprint />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
