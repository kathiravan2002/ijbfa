import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {




    const links = [
        { text: 'Home', path: '/' },
        { text: 'Aim & Scope', path: '/aimscope' },
        { text: 'About Us', path: '/aboutus' },
        { text: 'Editorial Board', path: '/editorial' },
        { text: 'Issues', path: '/issues' },
        { text: 'Copyright Form', path: '/copyrightformpage' },
        { text: 'Contact Us', path: '/contactuspage' },
        { text: 'Author Guidelines', path: '/authorguidelinespage' },
        

    ];

    const sublinks = [
        { text: 'Peer review Process', path: '/peer' },
        { text: 'Publications Ethics', path: '/publicationethicspage' },
        { text: 'Abstracting & Indexing', path: '/abstractindexing' },
        { text: 'Article Processing', path: '/articleprocessingpage' },
    ];

    const policy =[
        { name: "Plagiarism ", path: "/plagiarismpage" },
        { name: "Malpractice", path: "/malpracticepage" },
        { name: "Correction", path: "/correctionpage" },
        { name: "Publication Rights", path: "/publicationrightspage" },
    ]
   

    return (
        <div className="hidden lg:flex relative ">
            <div className=" sticky top-40 max-h-[calc(100vh-175px)] overflow-auto ">
                <div className='border rounded-lg p-2 w-64 bg-[#D3E0EA]'>

                    <ul className="space-y-1">
                        {links.map((item, index) => (
                            <li key={index} className="border-b border-gray-300">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `text-[#1687A7] hover:text-white hover:bg-[#1687A7] poppins-regular  hover:p-1 hover:px-3 block p-1 px-3 rounded-lg transition-all duration-300 ease-in-out ${isActive ? ' bg-[#1687A7] p-1 px-3 poppins-regular text-white' : ''
                                        }`
                                    }
                                >
                                    {item.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className=' text-[#1687A7] mt-3'>
                    <h2 className='text-center poppins-bold'>Journal Overview</h2>
                    <div className='borde rounded-lg p-2 w-64 bg-[#D3E0EA] mt-2 '>

                        <ul className="space-y-1">
                            {sublinks.map((item, index) => (
                                <li key={index} className="border-b  border-gray-300">
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `text-[#1687A7] hover:text-white hover:bg-[#1687A7] poppins-regular  hover:p-1 hover:px-3 block p-1 px-3 rounded-lg transition-all duration-300 ease-in-out ${isActive ? ' bg-[#1687A7] p-1 px-3 font-poppins text-white' : ''
                                            }`
                                        }
                                    >
                                        {item.text}
                                    </NavLink>
                                </li>

                            ))}

                        </ul>

                    </div>
                </div>
                <div className=' text-[#1687A7] mt-3'>
                    <h2 className='text-center poppins-bold'>Journal Policy</h2>
                    <div className='borde rounded-lg p-4 w-64 bg-[#D3E0EA] mt-2 '>

                        <ul className="space-y-1">
                            {policy.map((item, index) => (
                                <li key={index} className="border-b  border-gray-300 ">
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `text-[#1687A7] hover:text-white hover:bg-[#1687A7] poppins-regular  hover:p-1 hover:px-3 block p-1 px-3 rounded-lg transition-all duration-300 ease-in-out ${isActive ? ' bg-[#1687A7] p-1 px-3 font-poppins text-white' : ''
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>

                            ))}

                          
                        </ul>

                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Sidebar;

