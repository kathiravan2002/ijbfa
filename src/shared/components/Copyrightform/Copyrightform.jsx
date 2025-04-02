import React from 'react'
import check from '/assets/Block.png'
import dash from '/assets/books.jpg'
import cloud from '/assets/cloud.png'


function Copyrightform() {

  return (
    <div className='flex flex-col'>

      <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
        <div className="w-full">
          <div className='  lg:py-5 py-3 border-b-2 border-[#1687A7]  '>
            <h1 className="text-xl  lg:text-xl  mb-3 lg:mb-4 text-[#1687A7]  poppins-bold">
              Copyright Declaration
            </h1>
            <div className='lg:flex justify-evenly gap-2'>
              <div>

                <div className='lg:hidden block'>
                  <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3' />
                </div>
                <p className="  text-black mb-3 lg:mb-4   poppins-regular max-w-[1094px] ">
                  The International Journal of Blockchain and FinTech Applications ensures that all published content adheres to copyright regulations and intellectual property rights. Authors retain the copyright of their work while granting the journal the right to publish and distribute it. Proper attribution must be given when reproducing or referencing published articles. Any unauthorized use, reproduction, or distribution of content without permission is strictly prohibited. The journal follows open-access or licensing policies as per the publication agreement.
                </p>
              </div>
              <div className='hidden lg:block '>
                <img src={dash} alt="image" className=' min-w-[150px] max-w-auto lg:h-auto xl:h-[144px] ' />
              </div>
            </div>


          </div>
        </div>


        <div className='border-b-2 border-[#1687A7] mt-4'>
          <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>Copyright Declaration </h2>
          <p className='poppins-regular mt-4 mb-4 '>I/We __________ the author(s) of the research paper/article entitled __________ authorize you to publish the above mentioned paper/article in IJBFA. By submitting this declaration, the author(s) confirm their agreement to the following terms and conditions regarding the publication of their research work.</p>
        </div>
        <div className=' mt-4 mb-6'>
          <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>Author Agreement  </h2>
          <p className='poppins-regular mt-4 mb-4 '>This agreement outlines the terms and conditions for publication, ensuring the protection of both the author's rights and the journal's interests. The author(s) maintain their copyright while granting the journal the necessary rights to publish and distribute the work.</p>
        </div>

       <div className='bg-[#D3E0EA] mt-4 rounded-lg p-4'>
          <h2 className='text-[#1687A7] poppins-bold text-xl text-center'>
          Copyrights Points
          </h2>
        <div>
          <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>Publication Rights</h2>
          <p className='poppins-regular mt-4 mb-4'>
          I/We will not publish the above-mentioned contribution anywhere else without the prior written permission of the publisher, unless it has been substantially changed.
          </p>
        </div>
        <div>
          <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>Content Warranty</h2>
          <p className='poppins-regular mt-4 mb-4'>
          I/We declare and warrant that the contribution is original, except for excerpts from copyrighted works that may be included with the permission of the copyright holder and author thereof.
          </p>
        </div>
        <div>
          <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>Legal Compliance</h2>
          <p className='poppins-regular mt-4 mb-4'>
          The Author warrants the right to enter into this Agreement and that the Article contains no libelous or unlawful statements, harmful instructions, and does not violate any rights or privacy of others.
          </p>
        </div>
       </div>

      </div>
    </div>
  )
}

export default Copyrightform