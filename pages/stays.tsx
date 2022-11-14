import React from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'


const Stays = () => {
  const array = [
    {
      index: 1
    },
    {
      index: 2
    },
    {
      index: 3
    },
    {
      index: 4
    },
    {
      index: 5
    },
    {
      index: 6
    },
    {
      index: 7
    },
    {
      index: 8
    },
    {
      index: 9
    }
  ]
  return (
    <Layout>
      <div className='my-32 '>
        <Container>
          <div className='text-center text-2xl font-bold'>Explore <span className='text-[#f15824]'>Stays</span></div>
          <div className='grid grid-cols-2 gap-4 text-center lg:grid-cols-4 gap-4 text-center ' >
            {
              array.map((d, i) => (
                <div key={i} className='w-30 h-48 border border-indigo-600 my-10 justify-center lg:w-56'>
                  {d?.index}
                </div>
              ))
            }



          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default Stays