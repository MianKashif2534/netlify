import Image from 'next/image'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Home() {
  const cardData = [
    {
      num: '1',
      title: 'Actionable insights',
      description:
        'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.',
    },
    {
      num: '2',
      title: 'Data-driven decisions',
      description:
        'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.',
    },
    {
      num: '3',
      title: 'AI-generated reports',
      description:
        'Get actionable insights with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.',
    },
  ]
  return (
    <>
      <div className='relative'>
        <div
          style={{ clipPath: 'ellipse(140% 90% at 50% 0%)' }}
          className='bg-[#250545] h-[100vh] md:h-[120vh] lg:h-[150vh] w-full relative '
        >
          <nav className='flex justify-between items-center px-4 py-10'>
            <img src='./logoimg.svg' alt='' />
            <button className='font-bold text-white text-lg relative group py-1'>
              <span>Apply for access</span>
              <span className='absolute bottom-0 left-0 w-0 h-[3px] bg-[#45ffa2] transition-all duration-300 group-hover:w-full'></span>
            </button>
          </nav>
          <div className='flex flex-col gap-12 justify-center items-center text-center mt-12'>
            <h1 className='text-4xl  md:text-6xl lg:text-8xl font-bold text-white '>
              Data{' '}
              <span className='border-b-[3px] border-[#45ffa2]'>tailored</span>{' '}
              to <br /> your needs
            </h1>
            <button className='bg-[#45ffa2] text-[#250545] hover:bg-[#250545] hover:text-[#45ffa2] hover:border-[#45ffa2] border-[2px] border-[#45ffa2] transition-all duration-400 py-4 px-6 font-semibold text-lg font-times'>
              Learn more
            </button>
          </div>
        </div>
        <div className='absolute -bottom-12  w-[320px] md:w-[450px] lg:w-full left-16  md:left-40 lg:left-0  flex justify-center'>
          <img src='./heroimg.png' alt='' className='max-w-full h-auto' />
        </div>
      </div>

      <section className='px-6 py-12 flex flex-col lg:flex-row justify-center items-center gap-12 my-28  w-full '>
        {cardData.map((card) => (
          <div
            className='text-center  flex   md:gap-12 items-center justify-center  flex-col md:flex-row lg:flex-col'
            key={card.num}
          >
            <div className='w-10 h-10 md:w-14 md:h-14 md:p-6 rounded-full border border-[#2B0A3D] flex items-center justify-center mx-auto mb-6 md:mb-0 md:text-2xl'>
              <span className='text-[#2B0A3D] font-serif'>{card.num}</span>
            </div>
            <div className='text-center md:text-start lg:text-center px-6'>
              <h2 className='text-2xl font-serif text-[#2B0A3D] mb-4 md:text-4xl'>
                {card.title}
              </h2>
              <p className='text-sm text-gray-700 max-w-md mx-auto md:text-xl'>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className='px-6 py-12 '>
        <div className='bg-[#2B0A3D] text-white relative mt-32 lg:mt-36 md:ml-[40%]'>
          <div className='px-6 py-12 md:px-10 md:py-16 lg:py-20 lg:px-14'>
            <h2 className='text-2xl font-serif mb-4 lg:text-5xl'>
              Be the first to test
            </h2>
            <p className='text-md mb-6 lg:text-xl lg:max-w-xl'>
              Im Louis Graham, the founder of the company. Book a demo call with
              me to become a beta tester for our app and kickstart your company.
              Apply for access below and Ill be in touch to schedule a call.
            </p>
            <button className='bg-[#44FFA1] text-[#2B0A3D] font-bold py-4 px-8 mt-3 lg:text-xl hover:bg-opacity-90 transition-all'>
              Apply for access
            </button>
          </div>
          <div className='bg-[#44FFA1] rounded-full w-64 h-64 mx-auto overflow-hidden absolute top-[-60%] left-1/2 transform -translate-x-1/2 -z-10  lg:w-[550px] lg:h-[550px] md:top-[8%] md:left-0 md:-translate-y-1/2 md:translate-x-[-80%]'>
            <Image
              src='/userimage.jpg'
              width={550}
              height={550}
              className='object-cover'
              alt='Louis Graham'
            />
          </div>
        </div>
      </section>

      <footer className='mt-auto py-12 md:py-24 text-center'>
        <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#2B0A3D] mb-8'>
          works<span className='font-normal'>it</span>
        </div>
        <div className='flex justify-center gap-6'>
          <Facebook className='w-5 h-5 text-[#2B0A3D]' />
          <Twitter className='w-5 h-5 text-[#2B0A3D]' />
          <Instagram className='w-5 h-5 text-[#2B0A3D]' />
        </div>
      </footer>
    </>
  )
}
