import Head from 'next/head'
import Image from 'next/image'
import DazedText from '../components/DazedText'

export default function Home() {
  return (
    <div className='w-full'>
      <Head>
        <title>Social Eye</title>
        <meta
          name="description"
          content="Social graph based on Lens protocol"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full h-screen flex flex-col items-center gap-4 justify-start pt-10'>
        <div className='w-[15rem] h-[15rem] relative'>
          <Image src="/images/eye.svg" alt="Eye" fill style={{ objectFit: 'contain' }} />
        </div>
        <DazedText>Social Eye</DazedText>
        <p className='font-light text-2xl w-2/3 text-center text-gray-800 py-4'>Integer tincidunt amet integer nunc sit pellentesque urna vestibulum. Enim amet sit sagittis lacus.</p>
        <div className='w-3/5 h-14 rounded-full flex items-center justify-between border-2 border-black my-4'>
          <input className='outline-none h-full font-light text-gray-600 text-2xl placeholder:text-gray-500 w-full bg-transparent px-8' placeholder='e.g adam.lens' />
          <button className='w-1/3 h-full bg-[#B39AFF] text-black font-normal hover:bg-[#a384fe] hover:text-white transition-colors ease-in-out text-xl rounded-full outline outline-2 outline-black'>Search</button>
        </div>
      </div>
    </div>
  )
}
