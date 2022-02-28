import React from 'react';
import  {NavLink}   from 'react-router-dom';
import s from './Header.module.css'



export function Header() {
  return (
    <nav>
        <div>
          <NavLink to={'/pre_junior'} className={s.activeLink}>Pre-Junior</NavLink>
        </div>
        <div>
          <NavLink to={'/junior'} className={s.activeLink}>Junior</NavLink>
        </div>
        <div>
        <NavLink to={'/junior_plus'} className={s.activeLink}>JuniorPlus</NavLink>
        </div>
    </nav>

  );
}


