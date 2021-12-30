import React from 'react';
import Navbar from '../../components/Navbar';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="block w-full py-10 mx-auto select-none md:flex md:py-20 md:px-56 h-max bg-gray-300/80">
                <div className="flex w-full h-max">
                    <img
                        src="/gusti.jpg"
                        alt=""
                        className="object-cover object-center w-full h-64 mx-4 md:mx-14 md:shadow-xl md:border-l-1 md:shadow-blue-400 md:h-96 md:w-96 ring-4 ring-blue-500"
                    ></img>
                </div>
                <div className="flex h-32 pt-5 pl-4 mx-4 mt-1 font-serif text-lg leading-10 text-white duration-500 transform bg-blue-600 shadow-xl md:mx-0 md:mt-0 md:text-xl md:items-center hover:animate-pulse md:px-10 md:rounded-r-lg md:w-full shadow-pink-400 md:h-96 ring-4 ring-blue-500 hover:bg-blue-900">
                    Nama : Gusti Riza Pradana
                    <br /> Gmail : gustirezapradana@gmail.com
                </div>
            </div>
        </div>
    );
};

export default About;
