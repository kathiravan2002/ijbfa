import React from 'react';
import cloud from '/assets/cloud.png'
import check from '/assets/Block.png'
import dash from '/assets/books.jpg'


const Correction = () => {
    return (
        <div className='flex flex-cols  '>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <div className="w-full">
                    <div className='  lg:py-5 py-3 border-b-2 border-[#1687A7] '>
                        <h1 className="text-xl  lg:text-xl  mb-3 lg:mb-4 text-[#1687A7]  poppins-bold">
                        Journal Correction Policy           </h1>
                        <div className='lg:flex justify-evenly gap-2'>
                            <div>

                                <div className='lg:hidden block'>
                                    <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3' />
                                </div>
                                <p className="  text-black mb-3 lg:mb-4   poppins-regular max-w-[1094px] ">
                                The International Journal of Blockchain and FinTech Applications is committed to maintaining the accuracy and integrity of published research. If errors or inaccuracies are identified in a published article, the journal provides a transparent correction process. Minor errors that do not affect the study's validity may be addressed through an erratum, while significant errors requiring substantial changes may result in a retraction or corrigendum. Authors are encouraged to report any necessary corrections, and all updates will be clearly stated and made accessible to readers.
                                </p>
                            </div>
                            <div className='hidden lg:block '>
                                <img src={dash} alt="image" className=' min-w-[150px] max-w-auto lg:h-auto xl:h-[144px] ' />
                            </div>
                        </div>


                    </div>
                </div>


                <div className='border-b-2 border-[#1687A7]  mt-4  '>
                    <h2 className='poppins-bold text-[#1687A7]  text-xl'>Version of Record (VoR)</h2>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications ensures that once an article is published, it becomes the official Version of Record. </p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>This final, peer-reviewed, and edited version is permanently available for citation and reference. </p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Any updates or corrections after publication follow the journal’s correction policy and are transparently linked to the original article.</p></div>
                    <div className='flex items-start  mt-4 mb-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal maintains a stable and reliable record of all published research to ensure academic integrity and accessibility.</p></div>
                </div>
                <div className=' mt-4 mb-4  '>
                    <h2 className='poppins-bold text-[#1687A7]  text-xl'>Correction Criteria</h2>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Erratum: Issued for minor errors (e.g., typographical mistakes) that do not affect the study's conclusions.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Corrigendum: Used when authors identify significant errors in their work that require clarification.</p></div>
                    <div className='flex items-start  mt-4 mb-6 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Retraction: Applied in cases of major errors, ethical violations, or misconduct that invalidate the research findings.</p></div>

                </div>

                <div className='bg-[#D3E0EA] mt-4 rounded-lg p-4'>
                    <h2 className='text-[#1687A7] poppins-bold text-xl text-center'>
                    Correction Process                          </h2>
                    <div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The correction process in scholarly publishing ensures the accuracy and integrity of published research. </p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>This process maintains trust in academic publishing by providing clear, documented updates to the original work. Corrections ensure that research remains credible, traceable, and aligned with ethical standards.</p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>By systematically handling errors, journals contribute to the reliability and continuous improvement of scholarly communication.</p></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Correction;