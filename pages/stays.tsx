import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';

const Stays = () => {
  const array = [
    {
      index: 1,
      url: 'https://img.cdn.zostel.com/zostel/gallery/images/UckUVWBuRO26Pzrm9kNB8A/chamba-20220602201924.jpg?h=400',
      name: 'Chamba',
    },
    {
      index: 2,
      url: 'https://img.cdn.zostel.com/zostel/gallery/images/Au2EbwKgSbm7VRBzFhzwIg/taste-adventure-in-the-himalayas-of-bir-202_H7vz0yf.jpg?h=400',
      name: 'Bir',
    },
    {
      index: 3,
      url: "https://img.cdn.zostel.com/zostel/gallery/images/AogyCX0KQpeNYeOK545cgA/burwa-20220520080419.jpg?h=400",
      name: "Burwa"
    },
    {
      index: 4,
      url: "https://img.cdn.zostel.com/zostel/gallery/images/_7osfwtmT9SiCNJo_Z5LGw/jibhi-20220129082028.jpeg?h=400",
      name: "Jibhi"
    },
    {
      index: 5,
      url: "https://img.cdn.zostel.com/zostel/gallery/images/Rp7QpX-JS42R933SRiONNw/dharamkot-20220807174126.jpg?h=400",
      name: "Dharamkot"
    },

  ];
  return (
    <Layout>
      <div className="my-32 ">
        <Container>
          <div className="text-center text-2xl font-bold">
            Explore <span className="text-[#f15824]">Stays</span>
          </div>
          <div className="flex flex-wrap justify-around gap-4 text-center ">
            {array.map((d, i) => (
              <div
                key={i}
                className="flex font-bold text-white cursor-pointer items-center bg-cover w-36 h-48 border rounded-md my-10 justify-center lg:w-72 "
                style={{ backgroundImage: `url(${d.url})` }}
              >
                <span> {d?.name}</span>{' '}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Stays;
