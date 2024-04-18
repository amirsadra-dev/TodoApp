import React from 'react';
import TodoForm from './todoForm';
import { NavLink, Routes, Route, useLocation } from 'react-router-dom';

import Arab from '../assest/arabian-man.webp'

export default function Home() {
  const location = useLocation();

  return (
    <>

      {location.pathname !== '/todo' && (
        <NavLink to='/todo'>
          <div className='wrapper'>
            <div className='todo'>
              <img className='Arab-man' src={Arab} alt="" />
              <span>برو به تسک ها</span>
            </div>
          </div>
        </NavLink>
      )}

      <Routes>
        <Route path='/todo' element={<TodoForm />} />
      </Routes>
    </>
  );
}