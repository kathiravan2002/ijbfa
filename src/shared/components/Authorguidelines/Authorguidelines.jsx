import React from 'react'
import dash from '/assets/books.jpg'
import check from '/assets/Block.png'


function Authorguidelines() {

  return (
    <div className='flex flex-cols  '>

      <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
        <div className="w-full">
          <div className='  lg:py-5 py-3 border-b-2 border-[#1687A7]  '>

            <div className='lg:flex justify-evenly items-center gap-5'>
              <div>
                <h1 className="text-xl  lg:text-xl  mb-3 lg:mb-4 text-[#1687A7]  poppins-bold">
                  Author Guidelines
                </h1>
                
                  <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border' />
               
                <p className="  text-black mb-3 lg:mb-4   poppins-regular max-w-[1094px] ">
                  The International Journal of Blockchain and FinTech Applications provides clear guidelines to ensure high-quality and well-structured submissions. Authors must follow the journal’s formatting requirements, including proper citations and references. Submissions should be original, free from plagiarism, and not under review elsewhere. Manuscripts must present clear research objectives, methodology, and contributions to the field. Detailed guidelines on formatting, ethical standards, and submission procedures are available on the journal’s website.
                </p>
              </div>
              <div className='hidden lg:block shadow-lg border'>
                <img src={dash} alt="image" className=' max-w-[150px] max-w-auto ' />
              </div>
            </div>


          </div>
        </div>


        <div className='border-b-2 border-[#1687A7]  mt-4  '>
          <h2 className='poppins-bold text-[#1687A7]  text-xl'>Publishing Requirements</h2>
          <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications is designed for researchers, academicians, industry professionals, policymakers, and technology enthusiasts interested in blockchain and financial technology (FinTech). </p></div>
          <div>
            <div className='mb-4'>
              <h2 className='poppins-bold text-black  text-lg  mt-4'>Key Requirements :</h2>
              <ul className='list-disc  space-y-2 poppins-regular ml-8  mt-4 '>
                <li>Manuscripts must adhere to the IJBFA template.</li>
                <li>Abstracts should be 200-1000 characters and structured as per PubMed format.</li>
                <li>Three to eight keywords must be included.</li>
                <li>References should follow the Vancouver style.</li>
                <li>Ensure proper grammar, spelling, and use of formal English.</li>
              </ul>
            </div>

          </div>
        </div>
        <div className=' mt-4'>
          <h2 className='poppins-bold text-[#1687A7]  text-xl'>Submission Process</h2>
          <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Submit your manuscript in OpenOffice, Microsoft Word, or RTF format through our Open Journal System (OJS).</p></div>
          <div>
            <div className='mb-4'>
              <h2 className='poppins-bold text-black  text-lg mt-4'>Key Requirements</h2>
              <ul className='list-disc  space-y-2 poppins-regular ml-8 mt-4 '>
                <li>Initial manuscript screening by editorial team.</li>
                <li>Double-blind peer review process.</li>
                <li>Author revision period.</li>
                <li>Final editorial decision.</li>
                <li>Publication with Creative Commons licensing.</li>
              </ul>
            </div>
            <div className='flex items-start  mb-6 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Our editorial team provides comprehensive support throughout the submission process to ensure a smooth publishing experience.</p></div>

          </div>
        </div>

        <div className='bg-[#D3E0EA] mt-4 rounded-lg p-4'>
          <h2 className='text-[#1687A7] poppins-bold text-xl text-center'>
            Accepted Article Types
          </h2>
          <div>
            <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>Research Article</h2>
            <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Original research articles presenting new findings, methodologies, and experiments. </p></div>
            <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>These articles provide detailed analysis and evidence-based results.</p></div>

          </div>
          <div>
            <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>In-depth Review Article</h2>
            <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Comprehensive reviews summarizing and analyzing existing research and trends. </p></div>
            <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>These articles provide critical insights and future research directions.</p></div>

          </div>
          <div>
            <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>Technical Article</h2>
            <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Articles focusing on practical applications, technical advancements, and innovative solutions.  </p></div>
            <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>These articles highlight implementation details and technical challenges.</p></div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Authorguidelines