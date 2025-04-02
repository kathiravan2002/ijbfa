import React from 'react'
import check from '/assets/Block.png'
import dash from '/assets/books.jpg'

function Articalprocessing() {

   
    return (
         <div className='flex flex-cols  '>
        
                    <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                        <div className="w-full">
                            <div className='  lg:py-5 py-3 border-b-2 border-[#1687A7]'>
                                <h1 className="text-xl  lg:text-xl  mb-3 lg:mb-4 text-[#1687A7]  poppins-bold">
                                Article Processing  </h1>
                                <div className='lg:flex justify-evenly gap-2'>
                                    <div>
        
                                        <div className='lg:hidden block'>
                                            <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3' />
                                        </div>
                                        <p className="  text-black mb-3 lg:mb-4   poppins-regular max-w-[1094px] ">
                                        The International Journal of Blockchain and FinTech Applications follows a structured article processing workflow to ensure quality and timely publication. Submitted manuscripts undergo an initial screening for plagiarism, formatting, and relevance, followed by a rigorous peer-review process. Authors may be required to make revisions based on reviewer feedback before final acceptance. Once approved, articles are professionally edited, formatted, and published online for global accessibility. The journal ensures transparency and efficiency in the article processing cycle.
                                        </p>
                                    </div>
                                    <div className='hidden lg:block '>
                                        <img src={dash} alt="image" className=' min-w-[150px] max-w-auto lg:h-auto xl:h-[144px] ' />
                                    </div>
                                </div>
        
        
                            </div>
                        </div>
        
        
                        <div className='border-b-2 border-[#1687A7]  mt-4  '>
                            <h2 className='poppins-bold text-[#1687A7]  text-xl'>Publication Process</h2>
                            <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications follows a systematic publication process to ensure high-quality research dissemination. </p></div>
                            <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Submitted manuscripts undergo an initial editorial screening, followed by a rigorous double-blind peer review. After review, authors may be required to make revisions before final acceptance.</p></div>
                            <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Accepted articles are professionally edited, formatted, and published online with open access options. </p></div>
                            <div className='flex items-start  mt-4 mb-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal maintains a transparent and efficient workflow to uphold academic excellence and research integrity.</p></div>
                        </div>
                        <div className='mt-4 mb-4 '>
                            <h2 className='poppins-bold text-[#1687A7]  text-xl'>Author Benefits</h2>
                            <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors publishing in the International Journal of Blockchain and FinTech Applications gain global visibility and recognition for their research in blockchain and FinTech. </p></div>
                            <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal ensures a rigorous peer-review process, enhancing the credibility and impact of published work. </p></div>
                            <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Accepted articles are indexed in reputed databases, increasing their accessibility and citation potential. </p></div>
                            <div className='flex items-start  mt-4 mb-6 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular'>Authors also benefit from fast and transparent publication processes, open access options, and opportunities for collaboration within the research community.</p></div>
                        </div>
        
                        <div className='bg-[#D3E0EA] mt-4 rounded-lg p-4'>
                            <h2 className='text-[#1687A7] poppins-bold text-xl text-center'>
                            Processing Steps
                            </h2>
                            <div>
                                <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>Initial Submission</h2>
                                <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications welcomes original research articles, review papers, and technical studies for initial submission.</p></div>
                                <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors must ensure their manuscripts adhere to the journal’s formatting guidelines and ethical standards.</p></div>
                                <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Submissions should be free from plagiarism and not under review elsewhere. </p></div>
                                <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The initial screening process includes checks for relevance, originality, and compliance with submission requirements.</p></div>
                                <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Eligible manuscripts proceed to the peer-review stage for further evaluation.</p></div>
                            </div>
                            <div>
                                <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>Peer Review</h2>
                                <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications follows a rigorous double-blind peer review process to ensure the quality and integrity of published research. </p></div>
                                <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Each submission is evaluated by independent experts based on originality, methodology, and relevance to blockchain and FinTech.</p></div>
                                <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Reviewers provide constructive feedback, and authors may be required to make revisions before final acceptance. </p></div>
                                <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>This process maintains high academic standards and ensures the publication of impactful research.</p></div>
                            </div>
                            <div>
                                <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>Publications</h2>
                                <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications publishes high-quality research articles, review papers, and technical studies after a rigorous peer-review process.</p></div>
                                <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Accepted manuscripts undergo professional editing and formatting before being published online for global access. </p></div>
                                <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal ensures timely dissemination of cutting-edge research in blockchain and FinTech. </p></div>
                                <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors benefit from increased visibility, indexing in reputed databases, and opportunities for academic and industry recognition.</p></div>
                            </div>
                        </div>
        
                    </div>
                </div>
    )
}

export default Articalprocessing