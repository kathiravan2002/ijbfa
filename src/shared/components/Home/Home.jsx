import React from 'react';
import Data from '/assets/Blockchain.png';
import dash from '/assets/books.jpg'
import { TiArrowRightThick } from 'react-icons/ti';

const Home = ({navigate,researchDomains}) => {
  

  return (
    <div className="flex flex-col min-h-screen w-full max-w-[1500px] mx-auto ">

      <div className="max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2  " >
        <main className="w-full text-justify ">
          <section className="w-full">
            <div className='  lg:py-5 py-3 border-b-2 border-[#1687A7]  '>
            
              <div className='lg:flex justify-evenly items-center gap-5'>
                <div>
                <h1 className="text-xl  lg:text-xl  mb-3 lg:mb-4 text-[#1687A7]  poppins-bold">
                  Welcome to IJBFA
                  </h1>
                    <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border' />
                  <p className="  text-black mb-3 lg:mb-4   poppins-regular max-w-[1094px] ">
                    <span className=" poppins-semibold ">
                    The International Journal of Blockchain and FinTech Applications(IJBFA)
                    </span>{' '}
                    is a peer-reviewed journal focused on the latest advancements in blockchain technology and financial technology (FinTech). It provides a platform for researchers and industry experts to explore innovations in digital payments, smart contracts, decentralized finance, and financial security. The journal publishes high-quality research, case studies, and technical developments to bridge the gap between academia and industry. It aims to foster collaboration and drive the future of digital finance through cutting-edge research and practical applications.
                  </p>
                </div>
                <div className='hidden lg:block shadow-lg border'>
                  <img src={dash} alt="image" className=' max-w-[150px] max-w-auto  ' />
                </div>
              </div>


            </div>
          </section>
       
            <div className='border-b-2 border-[#1687A7]'>   
                  <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>About the Journal</h2>
              <p className='poppins-regular mt-4  '>The International Journal of Blockchain and FinTech Applications is a peer-reviewed journal dedicated to exploring innovations in blockchain technology and financial technology (FinTech). It provides a platform for researchers, academics, and industry experts to share insights on digital payments, smart contracts, decentralized finance, and financial security. The journal aims to bridge the gap between research and practical applications, fostering advancements in secure and efficient financial systems.</p>
             

              <div className="flex  justify-end px-6  mt-3 lg:mt-9 mb-4">

                <button className="bg-[#1687A7] text-white w-[159px] px-5 py-2 rounded-lg poppins-bold " onClick={() => navigate('/aboutus')}>
                  <div className='flex justify-between '>  Learn More
                  <TiArrowRightThick  className='mt-1'/>
                  </div>
                </button>
              </div>
            </div>
            <div className=' mb-4'>
             
                  <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>Aim & Scope</h2>
               
              <p className='poppins-regular mt-4  '>The International Journal of Blockchain and FinTech Applications aims to advance research and innovation in blockchain technology and financial technology (FinTech). It provides a platform for scholars, researchers, and industry professionals to explore topics such as digital payments, decentralized finance, smart contracts, cryptocurrency, and financial security. The journal focuses on theoretical and applied research, bridging the gap between academia and industry. It welcomes high-quality contributions that drive the future of secure, transparent, and efficient financial systems.</p>
             

              <div className="px-6  mt-3 mb-6 flex justify-end">

                <button className="bg-[#1687A7] text-white px-5 py-2 rounded-lg poppins-bold " onClick={() => navigate('/aimscope')}>
                  <div className='flex justify-between gap-3'>  Learn More
                  <TiArrowRightThick  className='mt-1'/>
                  </div>
                </button>
              </div>
            </div>

        
          

          <section className="bg-[#D3E0EA] p-4 lg:p-5 rounded-lg lg:rounded-lg  w-full ">
          
            <h2 className="text-center text-xl lg:text-xl poppins-bold  text-[#1687A7] mb-2">
              Key Research Domains
            </h2>
           
            <p className="text-center text-base lg:text-lg mb-3 lg:mb-4 text-[#000000] poppins-bold px-4 lg:px-0">
            The journal covers the following areas of Blockchain and FinTech Applications 
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 xl:grid-cols-2 lg:gap-0 mt-2">
              {researchDomains.map((column, colIndex) => (
               
                    <p key={colIndex} className="flex gap-2 lg:gap-2 md:gap-0 space-y-1 lg:space-y-2">
                      <span className="ml-0 lg:ml-10 mt-2"><img src={Data} alt='shield' className='w-[43px] h-[22px]' /></span>
                      <span className="2xl:text-base xl:text-base lg:text-sm md:text-sm text-sm poppins-regular text-left">{column}</span>
                    </p>
                  
              ))}
            </div>
          </section>


          <section >
            <div className="w-full  text-center p-4 ">
              <p className="text-gray-800 mb-2 poppins-medium  lg:text-base px-4 lg:px-0 text-justify lg:text-center ">
                We publish original research articles, review articles, and technical notes. The journal reviews papers within two weeks of submission and publishes accepted articles on the internet immediately upon receiving the final versions. Our fast reviewing process is our strength.
              </p>
              <div className="bg-[#D3E0EA] rounded-lg p-2 mx-4 lg:mx-0">
                <p className="text-[#1687A7] poppins-medium  text-sm lg:text-base">
                  The last date for manuscript submission for the next issue is June 22, 2025
                </p>
              </div>
              <p className="text-black mt-2 poppins-regular   px-4 lg:px-0">
                With Warm Regards, <br />
                Editor-in-Chief<br />
                <span className="font-bold">IJBFA</span>
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
