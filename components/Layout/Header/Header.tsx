import Image from 'next/image';
import { useRouter } from 'next/router';
import { off } from 'process';
import React, { useState, useEffect } from 'react';
import Container from '../../Container';
import Navbar from './Navbar';

const Header = () => {
  const [offset, setOffset] = useState(0);
  const router = useRouter();
  useEffect(() => {
    function onScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      className={` ${offset === 0 && router.route === '/'
        ? 'bg-transparent '
        : 'bg-[#011c53] text-white '
        } fixed w-full top-0 z-10  h-16 lg:h-20 `}
    >
      <Container>
        <div className="flex justify-between items-center lg:py-2">
          <div className="w-1/3">
            <Image src="/xda-logo.png" alt="xda" width={100} height={100} />
          </div>
          <Navbar />
        </div>
      </Container>
    </div>
  );
};

export default Header;
