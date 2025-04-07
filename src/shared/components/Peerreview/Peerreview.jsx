import React from 'react'
import check from '/assets/Block.png'
import dash from '/assets/books.jpg'

function Peerreview() {

    return (
        <div className='flex flex-cols  '>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <div className="w-full">
                    <div className='  lg:py-5 py-3 border-b-2 border-[#1687A7]  '>
                       
                        <div className='lg:flex justify-evenly items-center gap-5'>
                            <div>
                            <h1 className="text-xl  lg:text-xl  mb-3 lg:mb-4 text-[#1687A7]  poppins-bold">
                            Peer Review Process
                        </h1>
                               
                                    <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto  lg:hidden block  border mb-3' />
                                
                                <p className="  text-black mb-3 lg:mb-4   poppins-regular max-w-[1094px] ">
                                    The International Journal of Blockchain and FinTech Applications follows a rigorous double-blind peer review process to ensure the quality and integrity of published research. Each submission is reviewed by independent experts in the field, assessing originality, relevance, methodology, and contribution to the domain. Authors may be required to revise their manuscripts based on reviewer feedback before final acceptance. The process ensures fairness, transparency, and high academic standards. Only high-quality research that meets the journal’s ethical and scholarly criteria is accepted for publication.
                                </p>
                            </div>
                            <div className='hidden lg:block shadow-lg border'>
                                <img src={dash} alt="image" className=' max-w-[150px] max-w-auto  ' />
                            </div>
                        </div>


                    </div>
                </div>


                <div className='border-b-2 border-[#1687A7]  mt-4  '>
                    <h2 className='poppins-bold text-[#1687A7]  text-xl'>Requirements</h2>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications accepts original research articles, review papers, and case studies that align with its scope. </p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Submissions must follow the journal's formatting guidelines, including proper citations and references. </p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors are required to ensure their work is free from plagiarism and has not been published or submitted elsewhere.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Manuscripts should demonstrate academic rigor, clear methodology, and a significant contribution to blockchain and FinTech research.</p></div>
                    <div className='flex items-start  mt-4 mb-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '> All submissions undergo a thorough peer-review process to maintain high publication standards.</p></div>
                </div>
                <div className=' mt-4 mb-6 '>
                    <h2 className='poppins-bold text-[#1687A7]  text-xl'>Benefits</h2>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Publishing in the International Journal of Blockchain and FinTech Applications offers global visibility and recognition for researchers, academicians, and industry professionals.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal provides a rigorous peer-review process, ensuring high-quality and credible research contributions.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors benefit from wide dissemination of their work, fostering collaboration and knowledge exchange in blockchain and FinTech advancements. </p></div>
                    <div className='flex items-start  mt-4 mb-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal also supports open access and indexing in reputed databases, enhancing the impact and reach of published research. </p></div>
                </div>

                <div className='bg-[#D3E0EA] mt-4 rounded-lg p-4'>
                    <h2 className='text-[#1687A7] poppins-bold text-xl text-center'>
                        Accepted Article Types
                    </h2>
                    <div>
                        <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>Research Article</h2>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications publishes high-quality research articles covering innovative advancements in blockchain technology and financial technology (FinTech).</p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Submissions should present original research with a strong theoretical foundation, rigorous methodology, and practical implications. </p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Topics include decentralized finance (DeFi), smart contracts, digital payments, cybersecurity, and blockchain applications in financial services.</p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>All research articles undergo a thorough peer-review process to ensure academic excellence and contribution to the field. </p></div>

                    </div>
                    <div>
                        <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>In-depth Review Article</h2>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications welcomes comprehensive review articles that provide critical insights into emerging trends, technologies, and challenges in blockchain and FinTech.</p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>These articles should offer a detailed analysis of existing research, highlight gaps, and suggest future directions for innovation. </p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Topics may include decentralized finance (DeFi), cryptocurrency regulations, smart contract security, and blockchain adoption in financial services.</p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>All review articles undergo a rigorous peer-review process to ensure high academic and research standards.</p></div>

                    </div>
                    <div>
                        <h2 className='text-[#1687A7] poppins-bold mt-2 text-[20px] '>Technical Article</h2>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications publishes technical articles that focus on practical implementations, system architectures, and advancements in blockchain and FinTech technologies. </p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>These articles provide in-depth discussions on innovative algorithms, frameworks, and technical solutions for challenges in digital payments, smart contracts, cybersecurity, and decentralized finance (DeFi).</p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '> Authors should present well-documented methodologies, experiments, or case studies to support their findings. All submissions undergo peer review to ensure technical accuracy and relevance to the field.</p></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Peerreview