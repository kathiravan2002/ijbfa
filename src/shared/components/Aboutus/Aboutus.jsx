import React from 'react'
import dash from '/assets/books.jpg'
import check from '/assets/Block.png'
import { TiArrowRightThick } from 'react-icons/ti'

function Aboutus() {

    return (
        <div className='flex flex-col'>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <div className="w-full">
                    <div className='  lg:py-5 py-3 border-b-2 border-[#1687A7] '>

                        <div className='lg:flex justify-evenly items-center gap-5'>
                            <div>
                                <h1 className="text-xl  lg:text-xl  mb-3 lg:mb-4 text-[#1687A7]  poppins-bold">
                                    About Us
                                </h1>
                                
                                    <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border' />
                                
                                <p className="  text-black mb-3 lg:mb-4   poppins-regular max-w-[1094px] ">
                                    The International Journal of Blockchain and FinTech Applications is a peer-reviewed journal dedicated to publishing high-quality research on blockchain technology and financial technology (FinTech). It serves as a platform for academics, researchers, and industry professionals to explore innovations in digital finance, smart contracts, decentralized finance, and financial security. The journal aims to bridge the gap between research and real-world applications, fostering advancements in secure and efficient financial systems. Through cutting-edge studies and insights, it contributes to the evolving landscape of blockchain and FinTech.
                                </p>
                            </div>
                            <div className='hidden lg:block shadow-lg border'>
                                <img src={dash} alt="image" className=' max-w-[150px] max-w-auto  ' />
                            </div>
                        </div>


                    </div>
                </div>


                <div className='border-b-2 border-[#1687A7]  mt-4 '>
                    <h2 className='poppins-bold text-[#1687A7]  text-xl'>Scope</h2>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications covers cutting-edge research and advancements in blockchain technology and financial technology (FinTech).</p></div>
                    <div className='flex items-start mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>It explores topics such as decentralized finance (DeFi), smart contracts, digital payments, cybersecurity, cryptocurrency, and regulatory frameworks. </p></div>
                    <div className='flex items-start mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal welcomes theoretical and applied research that enhances financial security, transparency, and efficiency.</p></div>
                    <div className='flex items-start mt-2 mb-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>By bridging academia and industry, it fosters innovation in blockchain-driven financial solutions.</p></div>
                </div>
                <div className='border-b-2 border-[#1687A7]  mt-4  '>
                    <h2 className='poppins-bold text-[#1687A7]  text-xl'>Mission</h2>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications is committed to advancing research and innovation in blockchain technology and financial technology (FinTech).</p></div>
                    <div className='flex items-start mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Our mission is to provide a global platform for scholars, researchers, and industry professionals to share groundbreaking insights on digital finance, decentralized systems, and secure financial transactions. </p></div>
                    <div className='flex items-start mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>We aim to bridge the gap between academic research and practical applications, fostering the development of secure, transparent, and efficient financial ecosystems. </p></div>
                    <div className='flex items-start mt-2 mb-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Through high-quality publications, we strive to shape the future of blockchain and FinTech innovations.</p></div>
                </div>
                <div className='border-b-2 border-[#1687A7]  mt-4  mb-4 '>
                    <h2 className='poppins-bold text-[#1687A7]  text-xl'>Publications Ethics</h2>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications upholds the highest standards of publication ethics to ensure integrity, transparency, and quality in research.</p></div>
                    <div className='flex items-start mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>We adhere to ethical guidelines for authors, reviewers, and editors, promoting originality, peer review integrity, and the avoidance of plagiarism or fraudulent practices.</p></div>
                    <div className='flex items-start mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors must ensure their submissions are free from misconduct, and reviewers are expected to provide unbiased, confidential evaluations. </p></div>
                    <div className='flex items-start mt-2 mb-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal strictly follows ethical publishing practices to maintain academic excellence and credibility in blockchain and FinTech research.</p></div>

                    <div className="px-6  mt-3 mb-4 flex justify-center">

                        <button className="bg-[#1687A7] text-white px-5 py-2 rounded-lg poppins-bold " onClick={() => navigate('/')}>
                            <div className='flex justify-between gap-3'>  Learn More
                                <TiArrowRightThick className='mt-1' />
                            </div>
                        </button>
                    </div>

                </div>
                <div className='border-b-2 border-[#1687A7]  mb-4  '>
                    <h2 className='poppins-bold text-[#1687A7]  text-xl'>Audience</h2>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications is designed for researchers, academicians, industry professionals, policymakers, and technology enthusiasts interested in blockchain and financial technology (FinTech). </p></div>
                    <div className='flex items-start mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>It serves as a valuable resource for scholars conducting theoretical and applied research, as well as practitioners developing innovative financial solutions. </p></div>
                    <div className='flex items-start mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal also caters to regulatory bodies, startups, and businesses seeking insights into decentralized finance, digital payments, and financial security.</p></div>
                    <div className='flex items-start mt-2 mb-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>By fostering knowledge exchange, it bridges academia and industry in the evolving FinTech landscape.</p></div>
                </div>
            </div>
            <div className=' mb-4  '>
                <h2 className='poppins-bold text-[#1687A7]  text-xl'>Submission Guidelines</h2>
                <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications welcomes original research articles, review papers, and case studies related to blockchain technology and FinTech.</p></div>
                <div className='flex items-start mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Submissions must be formatted according to the journal's template and should not have been published or under review elsewhere.</p></div>
                <div className='flex items-start mt-2 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '> Authors must ensure their work is free from plagiarism and follows ethical research practices. </p></div>
                <div className='flex items-start mt-2 mb-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>All submissions undergo a rigorous peer-review process to maintain high academic standards. </p></div>

                <div className="px-6  mt-3 mb-4 flex justify-center">

                    <button className="bg-[#1687A7] text-white px-5 py-2 rounded-lg poppins-bold " onClick={() => navigate('/')}>
                        <div className='flex justify-between gap-3'>  Learn More
                            <TiArrowRightThick className='mt-1' />
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Aboutus