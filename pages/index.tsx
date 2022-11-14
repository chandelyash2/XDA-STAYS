import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import BG from '../assets/barot.jpg';
export default function Home() {
  const [showMore, setShowMore] = useState(false);
  return (
    <Layout>
      <div>
        <Image
          src={BG}
          alt="home"
          className="bg-no-repeat bg-center w-screen"
        />
        <div className="flex flex-col items-center text-center my-10 gap-3">
          <div className="text-4xl font-bold">Welcome To</div>
          <div className="text-4xl text-[#f15824] font-bold">Barot</div>
          <div className="text-2xl text-[#5e5959] font-bold">About</div>
          <div className="w-3/4 leading-9">
            <p>
              The sound of car horns is replaced by the endless chirping of
              native birds. You’ll find traffic, lots of it, but only of flocks
              of mountain sheep and horses grazing nearby. And instead of
              skyscrapers and pollution, the window to your workplace hosts
              snow-clad mountains and clear blue skies. Something that makes
              Barot stand out is its seclusiveness. Disengage from the humdrum
              of everyday life as you lose yourself in the lap of nature.
            </p>
            {showMore && (
              <>
                <div className="text-2xl text-[#5e5959] font-bold mt-5">
                  Why we love barot
                </div>
                <p className='mt-2'>
                  The land of pleasant hikes and magnanimous treks, Barot is no
                  short on remote adventure. Opt between a half-day easy hike, a
                  moderate 2-day camping by the lake, or a full-fledged
                  difficult 12-day trek, the village has options pre-arranged
                  for all types of travellers!
                </p>
                <p className='mt-2'>
                  The village of Barot is so remote, that distant dreams of
                  stargazing, playing with sheep and calves, listening to the
                  breeze, and snug bonfires are all very much possible here
                  everyday! And when you have a spectacular mountain view to go
                  with all of these, why would you ever want to miss out on this
                  experience?
                </p>
                <p className='mt-2'>

                  The villages of Barot and Rajgundha have the most loving
                  locals, who lead a simple, traditional mountain lifestyle. If
                  you’re lucky, one of them might invite you for a simple and
                  yet fulfilling meal, which no sane traveller would ever deny.
                </p>
              </>
            )}
          </div>

          <button
            className="text-3xl text-[#f15824] font-bold"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </Layout>
  );
}
