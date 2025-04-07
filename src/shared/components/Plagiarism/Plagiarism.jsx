import React from 'react';
import check from '/assets/Block.png'
import dash from '/assets/books.jpg'


const Plagiarism = () => {
    return (
        <div className='flex flex-cols  '>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <div className="w-full">
                    <div className='  lg:py-5 py-3 border-b-2 border-[#1687A7] '>

                        <div className='lg:flex justify-evenly items center gap-5'>
                            <div>
                                <h1 className="text-xl  lg:text-xl  mb-3 lg:mb-4 text-[#1687A7]  poppins-bold">
                                    Plagiarism  Policy
                                </h1>
                                <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border' />
                                <p className="  text-black mb-3 lg:mb-4   poppins-regular max-w-[1094px] ">
                                    The International Journal of Blockchain and FinTech Applications maintains a strict plagiarism policy to uphold research integrity and originality. All submitted manuscripts are screened using plagiarism detection tools to ensure they contain no copied or improperly cited content. Any submission found to have significant plagiarism, including self-plagiarism or duplicate publication, will be rejected immediately. Authors must properly credit all sources and ensure their work is original. Violations of this policy may result in blacklisting from future submissions.
                                </p>
                            </div>
                            <div className='hidden lg:block shadow-lg border'>
                                <img src={dash} alt="image" className=' max-w-[150px] max-w-auto' />
                            </div>
                        </div>


                    </div>
                </div>


                <div className='border-b-2 border-[#1687A7]  mt-4  '>
                    <h2 className='poppins-bold text-[#1687A7]  text-xl'>Definition and Scope</h2>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Copying text, ideas, or results from another source without proper attribution.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Reproducing substantial parts of another author's work without permission.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Submitting duplicate publication or redundant publication.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Using previously published data without acknowledging the source.</p></div>
                    <div className='flex items-start  mt-4 mb-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '> Failing to cite relevant previous works.</p></div>
                </div>
                <div className='  mt-4 mb-4 '>
                    <h2 className='poppins-bold text-[#1687A7]  text-xl'>Types of Plagiarism</h2>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Direct plagiarism: Copying text verbatim without source acknowledgement.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Paraphrasing plagiarism: Rewording content without citing original source.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Mosaic plagiarism: Combining text from multiple sources without proper citation. </p></div>
                    <div className='flex items-start  mt-4  gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Self-plagiarism: Reusing own previously published work without citation. </p></div>
                    <div className='flex items-start  mt-4 mb-6 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Contract plagiarism: Submitting commissioned work as original content </p></div>

                </div>

                <div className='bg-[#D3E0EA] mt-4 rounded-lg p-4'>
                    <h2 className='text-[#1687A7] poppins-bold text-xl text-center'>
                        Detection and Consequences
                    </h2>
                    <div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '> All submitted manuscripts are screened using advanced plagiarism detection software to identify any similarities with existing published work. If plagiarism is detected, the manuscript will be rejected immediately.</p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>In cases of minor overlap, authors will be asked to revise and resubmit the work. Severe cases of plagiarism may lead to a ban on future submissions and notification to the author’s institution.</p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal upholds strict ethical standards to ensure the originality and integrity of published research.</p></div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Plagiarism;