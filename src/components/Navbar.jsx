import React, { useState } from 'react';
import { navLinks } from '../Fixed';

const Navbar = () => {
  const [t, setT] = useState(false);

  return (
    <nav className='w-full flex py-3 justify-between items-center'>
      <img src='https://i.ibb.co/bBRWyMt/Logo.png' alt='MINT' className='w-[60px] h-[30px]' />

      {/* Desktop navigation links */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile menu icon */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={t ? 'https://img.icons8.com/ios/50/000000/close-window--v1.png' : 'https://img.icons8.com/ios-filled/50/000000/menu--v6.png'}
          alt='Menu'
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setT(!t)}
        />

        {/* Mobile sidebar */}
        <div className={`${!t ? 'hidden' : 'flex'} flex p-3 top-5 right-6 pr-2 mx-4 my-8 absolute rounded-md sidebar bg-teal-500`}>
          <ul className='list-none flex justify-end itemste-cenr flex-1 flex-col bg-teal-500'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;