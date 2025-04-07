
import React from 'react';
import check from '/assets/Block.png'
import dash from '/assets/books.jpg'


const Malpractice = () => {
    return (
        <div className='flex flex-cols  '>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <div className="w-full">
                    <div className='   lg:pt-5 lg:py-1 py-3 border-b-2 border-[#1687A7] '>

                        <div className='lg:flex justify-evenly items-center gap-5 mb-4'>
                            <div>
                                <h1 className="text-xl  lg:text-xl  mb-3 lg:mb-4 text-[#1687A7]  poppins-bold">
                                    Publication Ethics and Malpractice Policy
                                </h1>
                                <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border' />
                                <p className="  text-black mb-3 lg:mb-4   poppins-regular max-w-[1094px] ">
                                    The International Journal of Blockchain and FinTech Applications is committed to maintaining the highest standards of publication ethics and preventing malpractice. The journal follows ethical guidelines for authors, reviewers, and editors to ensure integrity, transparency, and fairness in the publication process. Plagiarism, data fabrication, and unethical research practices are strictly prohibited. Authors must submit original work, reviewers must provide unbiased evaluations, and editors must ensure an objective and confidential review process. The journal upholds academic excellence by adhering to globally recognized ethical publishing standards.
                                </p>
                            </div>
                            <div className='hidden lg:block shadow-lg border'>
                                <img src={dash} alt="image" className=' max-w-[150px] max-w-auto ' />
                            </div>
                        </div>


                    </div>
                </div>


                <div className='border-b-2 border-[#1687A7]  mt-4  '>
                    <h2 className='poppins-bold text-[#1687A7]  text-xl'>Author's Responsibilities</h2>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Original work without plagiarism.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Valid authorship with significant contributions.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Proper acknowledgment of sources and citations.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Disclosure of conflicts of interest and funding.</p></div>
                    <div className='flex items-start  mt-4 mb-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '> Prompt notification of errors in published work.</p></div>
                </div>
                <div className='mt-4  mb-4'>
                    <h2 className='poppins-bold text-[#1687A7]  text-xl'>Editor's Responsibilities</h2>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Maintain journal quality and integrity.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Fair and unbiased publication decisions.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Rigorous peer review process implementation.</p></div>
                    <div className='flex items-start  mt-4  gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Conflict of interest disclosure.</p></div>
                    <div className='flex items-start  mt-4 mb-6 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Confidential manuscript handling.</p></div>

                </div>

                <div className='bg-[#D3E0EA] mt-4 rounded-lg p-4'>
                    <h2 className='text-[#1687A7] poppins-bold text-xl text-center'>
                        Reviewer's Responsibilities                            </h2>
                    <div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Reviewers for the IJBFA are expected to evaluate manuscripts fairly, objectively, and confidentially.</p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '> They should provide constructive feedback to help authors improve their work while maintaining professional integrity.</p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Reviewers must disclose any conflicts of interest and decline to review if they have any bias or personal connection with the authors.</p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Reviewers are required to complete their evaluations within the specified timeframe to ensure a smooth publication process.</p></div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default Malpractice;