import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../../reusable/Button';
const Navbar = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const navMenu = [
    {
      title: "Home"
    },
    {
      title: "Stays"
    },
    {
      title: "About"
    },

  ]
  return (
    <>
      <button
        className=" w-10 h-10 lg:hidden"
        onClick={() => setMenuActive(true)}
      >
        {!menuActive && (
          <Image alt="hamburger" src="/hamburger.png" width={25} height={25} />
        )}
      </button>
      <div className=" hidden  lg:block lg: w-2/3 lg:flex lg:flex-row lg:justify-between list-none">
        {
          navMenu.map((nav, index) => (
            <li key={index}>{nav.title}</li>
          ))
        }
        <div className='flex gap-4'>
          <Button label='Login' />
          <Button label='Sign Up' />

        </div>

      </div>
      {menuActive && (
        <div className=" fixed top-0 right-0 z-20 w-3/5 sm:w-1/2 h-screen pl-4 flex-col gap-5 bg-[#00d4ff]  lg:hidden">
          <div className="flex w-full justify-between lg:hidden">
            <Image src='/xda-logo.png' alt='xda' width={100} height={50} />
            <button type="button" onClick={() => setMenuActive(false)} className='mr-2'>
              <Image src="/close.png" alt="close" width={25} height={25} />
            </button>
          </div>
          <nav className="flex flex-col items-start gap-5 list-none mt-10">
            {
              navMenu.map((nav, index) => (
                <li key={index}>{nav.title}</li>
              ))
            }
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
