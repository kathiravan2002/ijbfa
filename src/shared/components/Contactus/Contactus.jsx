import React from 'react'


function Contactus() {
    return (
        <div className='flex flex-col  w-full'>
           
            <div className='w-full mt-4'>  
                <h1 className="text-xl  lg:text-xl poppins-extrabold mb-4 text-[#1687A7] text-center">Contact us</h1>
                <p className="text-black text-base mb-4 poppins-regular text-center">Get in touch with us for any queries or support </p>
               <div className='w-full  mx-auto px-6' >
                <div className="bg-[#D3E0EA] p-6 rounded-lg border max-w-md mx-auto">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-[#1687A7] poppins-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1687A7]"
                            />
                        </div>

                        
                        <div>
                            <label htmlFor="email" className="block text-[#1687A7]  poppins-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1687A7]"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-[#1687A7]  poppins-medium mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="subject"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1687A7]"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-[#1687A7]  poppins-medium mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Message..."
                                rows="4"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1687A7] max-h-[calc(85vh-100px)]"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#1687A7] text-white p-2 rounded-lg transition duration-300 flex items-center justify-center poppins-medium"
                        >
                            <span className="mr-2"></span> Send Email
                        </button>

                        <p className="text-center text-gray-600 mt-6 poppins-regular">
                            For any queries contact Email: <a href="mailto:editor@ijbfa.com" className="text-[#1687A7]  hover:underline">editor@ijbfa.com</a>
                        </p>
                    </form>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Contactus