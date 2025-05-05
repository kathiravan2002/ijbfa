import React from 'react'
import check from '/assets/Block.png'
import dash from '/assets/books.jpg'

function Publicationethics() {


    return (
        <div className='flex flex-cols  '>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <div className="w-full">
                    <div className='  lg:py-5 py-3 border-b-2 border-[#1687A7] '>

                        <div className='lg:flex justify-evenly items-center gap-5'>
                            <div>
                                <h1 className="text-xl  lg:text-xl  mb-3 lg:mb-4 text-[#1687A7]  poppins-bold">
                                    Publications Ethics
                                </h1>

                                <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border' />

                                <p className="  text-black mb-3 lg:mb-4   poppins-regular max-w-[1094px] ">
                                    The International Journal of Blockchain and FinTech Applications is committed to maintaining the highest ethical standards in publishing. Authors must ensure their submissions are original, free from plagiarism, and not under consideration elsewhere. The journal follows a strict peer-review process, ensuring fairness, confidentiality, and integrity. Reviewers and editors are expected to provide unbiased evaluations while maintaining transparency in the publication process. Any form of research misconduct, including data fabrication or plagiarism, will result in rejection or retraction of the article.
                                </p>
                            </div>
                            <div className='hidden lg:block shadow-lg border'>
                                <img src={dash} alt="image" className=' max-w-[150px] max-w-auto ' />
                            </div>
                        </div>


                    </div>
                </div>


                <div className='border-b-2 border-[#1687A7]  mt-4  '>
                    <h2 className='poppins-bold text-[#1687A7]  text-xl'>Research Integrity</h2>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications upholds the highest standards of research integrity, ensuring the credibility and reliability of published work.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors must adhere to ethical research practices, including proper citation, data transparency, and avoiding plagiarism or falsification of results.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal promotes honesty, accountability, and fairness in all research submissions. </p></div>
                    <div className='flex items-start  mt-4 mb-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Any breach of integrity, such as data manipulation or unethical authorship practices, may lead to rejection or retraction. </p></div>
                </div>
                <div className=' mt-4 mb-6 '>
                    <h2 className='poppins-bold text-[#1687A7]  text-xl'>Fail Review Process</h2>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>If a manuscript submitted to the International Journal of Blockchain and FinTech Applications fails the peer review process, the authors will receive detailed feedback explaining the reasons for rejection. </p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Common reasons include lack of originality, weak methodology, ethical concerns, or failure to meet the journal’s quality standards.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '> Authors may be encouraged to revise and resubmit if significant improvements are possible. </p></div>
                    <div className='flex items-start  mt-4 mb-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>In cases of major flaws or policy violations, the manuscript will be declined without reconsideration. </p></div>
                </div>

                <div className='bg-[#D3E0EA] mt-4 rounded-lg p-4'>
                    <h2 className='text-[#1687A7] poppins-bold text-xl text-center'>
                        Ethical Guidelines
                    </h2>
                    <div>
                        <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>Open Access Policy</h2>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications follows an open-access policy, ensuring that all published research is freely accessible to a global audience. </p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>This allows researchers, academicians, and industry professionals to access, share, and build upon published work without restrictions. </p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>By promoting knowledge dissemination, the journal supports innovation and collaboration in blockchain and FinTech research. </p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors retain copyright to their work while adhering to licensing terms that encourage academic and industry engagement.</p></div>

                    </div>
                    <div>
                        <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>Creative Common License</h2>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications publishes all articles under a Creative Commons License, ensuring free access and distribution while protecting authors' rights.</p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>This license allows researchers and practitioners to share, adapt, and build upon published work with proper attribution.  </p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors retain copyright while granting permission for non-commercial use and knowledge dissemination. </p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal promotes open research collaboration, enabling wider accessibility and impact in blockchain and FinTech advancements.</p></div>

                    </div>
                    <div>
                        <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>Community Standards</h2>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications upholds a respectful, inclusive, and professional environment for researchers, authors, reviewers, and readers.  </p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>All members of the journal’s community are expected to engage with integrity, fairness, and respect for diverse perspectives. Any form of discrimination, harassment, or unethical behavior will not be tolerated.</p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal promotes constructive discussions, academic honesty, and collaboration to advance knowledge in blockchain and FinTech. </p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Compliance with ethical and professional standards is essential for maintaining a high-quality research community.</p></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Publicationethics