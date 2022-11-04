import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  const currentYear = new Date().getFullYear().toString();

  return (
    <div className='absolute w-full bottom:0'>
      <div className='py-6 bg-[#011c53]  lg:py14'>
        <div className=' xl:container xl:mx-auto '>
          <div className='flex flex-col items-center gap-4'>
                   <Image src='/xda-logo.png' alt='xda' width={100} height={10} />
           
            <div className="text-white ">
              contact us{' '}
              <a href="mailto:info@xda.soccer?subject=Contact%20Us" className='text-[#00caff]'>
                info@xda.com
              </a>
            </div>
            <div className="text-[#00caff]">
              <Link data-e2e="privacy-policy-page" href="/privacy-policy">
                Privacy Policy
              </Link>
            </div>
            <div className="text-white text-sm font-black">
              © XDA Ltd {currentYear}
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Footer