import { headerLogo } from '../assets/images'
import { navLinks } from '../constans';
import { close, hamburger } from '../assets/icons';
import { useState } from 'react';
import clsx from 'clsx';

const Nav = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return ( 
    <header className='padding-x py-8 absolute w-full z-50'>
      <nav className='flex justify-between items-center max-container mb-3'>
        <a href="#">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            className='hover:scale-110'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label} className='hover:hoverNavHeader'>
              <a
                href={item.href}
                className='info-text hover:text-coral-red'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='lg:hidden cursor-pointer fixed right-8 hover:scale-110 hover:duration-300'>
          <img 
            src={hamburger}
            alt="Humburger" 
            width={25}
            height={25}
            onClick={() => setIsSideMenuOpen(true)}
          />
        </div>
        <div
  className={clsx(
    "fixed h-full w-screen lg:hidden bg-black/20 backdrop-blur-sm top-0 right-0 transition-all duration-500",
    !isSideMenuOpen ? "translate-x-full" : "translate-x-0"
  )}
>
  <section className="text-black bg-white flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
    <img
      onClick={() => setIsSideMenuOpen(false)}
      className="mt-0 mb-8 text-3xl cursor-pointer hover:scale-125"
      src={close}
      alt="Logo"
      width={28}
      height={28}
    />
    {navLinks.map((item) => (
      <a
        key={item.label}
        href={item.href}
        className="info-text hover:translate-x-2 hover:text-coral-red duration-300"
      >
        {item.label}
      </a>
    ))}
  </section>
</div>
      </nav>
      <hr />
    </header>
  );
}

export default Nav;
