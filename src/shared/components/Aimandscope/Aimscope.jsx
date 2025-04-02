import React from 'react';
import check from '/assets/Block.png'
import dash from '/assets/books.jpg'


const Aimscope = () => {
    return (
        <div className='flex flex-col'>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <div className="w-full">
                            <div className='  lg:pt-5 lg:py-1 py-3 border-b-2 border-[#1687A7]  '>
                            <h1 className="text-xl  lg:text-xl  mb-3 lg:mb-4 text-[#1687A7]  poppins-bold">
                            Aim and Scope 
                                  </h1>
                              <div className='lg:flex justify-evenly gap-2'>
                                <div>
                                 
                                  <div className='lg:hidden block'>
                                    <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3' />
                                  </div>
                                  <p className="  text-black mb-3 lg:mb-4   poppins-regular max-w-[1094px] ">
                                  The International Journal of Blockchain and FinTech Applications aims to advance research and innovation in blockchain technology and financial technology (FinTech). It provides a platform for researchers, academicians, and industry professionals to explore topics such as decentralized finance (DeFi), digital payments, smart contracts, cybersecurity, and financial regulations. The journal publishes high-quality theoretical and applied research that enhances financial security, transparency, and efficiency. By bridging academia and industry, it fosters innovation and contributes to the evolution of blockchain-driven financial solutions.
                                  </p>
                                </div>
                                <div className='hidden lg:block '>
                                  <img src={dash} alt="image" className=' min-w-[150px] max-w-auto lg:h-auto xl:h-[144px] ' />
                                </div>
                              </div>
                
                
                            </div>
                          </div>

                 
                       <div className='border-b-2 border-[#1687A7]  mt-4 '>
                        <h2 className='poppins-bold text-[#1687A7]  text-xl'>Aim</h2>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications aims to promote high-quality research and innovation in blockchain technology and financial technology (FinTech).</p></div>
                        <div className='flex items-start mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal provides a global platform for researchers, academicians, and industry professionals to share advancements in decentralized finance, digital payments, smart contracts, and financial security.</p></div>
                        <div className='flex items-start mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>It seeks to bridge the gap between theoretical research and practical applications, fostering secure, transparent, and efficient financial ecosystems.</p></div>
                        <div className='flex items-start mt-2 mb-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Through rigorous peer-reviewed publications, the journal contributes to the ongoing evolution of blockchain and FinTech solutions.</p></div>
                        </div>
                        <div className='mb-4 mt-4 '>
                        <h2 className='poppins-bold text-[#1687A7]  text-xl'>Scope</h2>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications covers a broad range of topics in blockchain technology and financial technology (FinTech).</p></div>
                        <div className='flex items-start mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>It focuses on areas such as decentralized finance (DeFi), smart contracts, digital payments, cryptocurrency, cybersecurity, financial regulations, and blockchain applications in banking and financial services.</p></div>
                        <div className='flex items-start mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal welcomes both theoretical and applied research that enhances financial security, transparency, and efficiency. </p></div>
                        <div className='flex items-start mt-2 mb-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>By fostering interdisciplinary collaboration, it aims to drive innovation and address emerging challenges in the evolving FinTech landscape.</p></div>
                        </div>
                
            </div>
        </div>
    );
};

export default Aimscope;