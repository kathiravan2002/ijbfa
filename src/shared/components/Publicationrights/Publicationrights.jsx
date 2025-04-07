import React from 'react';
import check from '/assets/Block.png'
import dash from '/assets/books.jpg'


const Publicationrights = () => {
    return (
        <div className='flex flex-cols  '>

            <div className="text-justify max-w-[90rem] mx-auto lg:pr-2 pr-2 lg:p-0 p-2 ">
                <div className="w-full">
                    <div className='  lg:py-5 py-3 border-b-2 border-[#1687A7]  '>

                        <div className='lg:flex justify-evenly items-center gap-5'>
                            <div>
                                <h1 className="text-xl  lg:text-xl  mb-3 lg:mb-4 text-[#1687A7]  poppins-bold">
                                    Publication Rights Policy
                                </h1>
                                    <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block border' />
                                <p className="  text-black mb-3 lg:mb-4   poppins-regular max-w-[1094px] ">
                                    The International Journal of Blockchain and FinTech Applications ensures that authors retain the rights to their work while granting the journal the necessary permissions for publication and distribution. Authors may be required to sign a publishing agreement that outlines their rights, including copyright ownership and licensing terms. The journal may offer open-access options, allowing broader dissemination under specific licensing conditions. Unauthorized reproduction or distribution of published content is strictly prohibited. This policy upholds ethical publishing standards while ensuring fair access to research.
                                </p>
                            </div>
                            <div className='hidden lg:block shadow-lg border'>
                                <img src={dash} alt="image" className=' max-w-[150px] max-w-auto ' />
                            </div>
                        </div>


                    </div>
                </div>


                <div className='border-b-2 border-[#1687A7]  mt-4  '>
                    <h2 className='poppins-bold text-[#1687A7]  text-xl'>Copyright Policy</h2>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The International Journal of Blockchain and FinTech Applications follows a clear copyright policy to protect authors' intellectual property while ensuring broad knowledge dissemination.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Authors retain the copyright of their work but grant the journal the right to publish, distribute, and archive their articles. </p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Proper attribution is required when reproducing or citing published content. </p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Unauthorized reproduction, distribution, or modification of articles without permission is strictly prohibited. </p></div>
                    <div className='flex items-start  mt-4 mb-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The journal supports open-access or specific licensing agreements to promote ethical and legal content sharing.</p></div>
                </div>
                <div className=' mt-4 mb-4 '>
                    <h2 className='poppins-bold text-[#1687A7]  text-xl'>Key Benefits</h2>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>The benefits of academic publishing are rooted in the principles of knowledge dissemination, scholarly recognition, and research impact.</p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '> A well-structured publication process enhances the credibility of research through rigorous peer review, ensuring quality and originality. </p></div>
                    <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Indexed and openly accessible articles increase visibility, leading to higher citation rates and academic recognition. </p></div>
                    <div className='flex items-start  mt-4  gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Ethical publishing fosters trust, collaboration, and innovation within the research community. </p></div>
                    <div className='flex items-start  mt-4 mb-6 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Additionally, a transparent and efficient publication system supports the continuous advancement of knowledge, bridging the gap between theory and real-world applications. </p></div>

                </div>

                <div className='bg-[#D3E0EA] mt-4 rounded-lg p-4'>
                    <h2 className='text-[#1687A7] poppins-bold text-xl text-center'>
                        Rights Management
                    </h2>
                    <div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '> Rights management in academic publishing ensures the proper protection, distribution, and usage of intellectual property.</p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '> It defines the ownership and control of published content, allowing authors to retain copyright while granting journals the right to publish and distribute their work. </p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Licensing agreements, such as Creative Commons, facilitate ethical sharing while maintaining author attribution. </p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '>Unauthorized reproduction, modification, or distribution of published material is strictly regulated.</p></div>
                        <div className='flex items-start  mt-4 gap-2'><img src={check} alt="checkmark" className='w-[26px] h-[20px]' /><p className='poppins-regular '> Effective rights management safeguards academic integrity, promotes fair access, and ensures compliance with copyright laws and ethical standards.</p></div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Publicationrights;