import Head from 'next/head';
import Contracts from '../components/Contracts';
import Profile from '../components/Profile';

import { BsMoonStarsFill } from 'react-icons/bs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Proxy Contract</title>
        <meta name="description" content="Create Upgradable Smart Contracts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col mx-auto'>
        <div className='flex flex-row justify-between'>
          <h1 className='text-gradient text-teal-500 font-bold mx-4 my-3 md:text-5xl lg:text-7xl'>Proxy Contract</h1>
          <div className='flex flex-row justify-between mr-2 align-middle my-5 lg:my-7'>
            <button className="justify-end mx-2 p-2 rounded-lg bg-gradient-to-l from-cyan-400 to-teal-600 text-sm h-fit hover:scale-105 active:scale-95 md:h-12 lg:h-14 lg:text-lg lg:px-5"><b>+ New Contract</b></button>
            <button className='text-lg border-2 mx-5 rounded-full border-black p-2 w-9 h-9 md:mt-1 lg:mt-2'><BsMoonStarsFill /></button>
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row'>
          <Contracts />
          <Profile />
        </div>
      </main>
    </div>
  )
}
