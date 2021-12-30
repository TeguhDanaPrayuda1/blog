import React from 'react';

const About = () => {
    return (
        <div className="flex h-screen px-56 py-20 mx-auto bg-gray-600/30">
            <div className="flex">
                <img
                    src="/gusti.jpg"
                    alt=""
                    className="object-cover object-center shadow-xl shadow-gray-400 h-96 w-96 ring-4 ring-blue-500"
                ></img>
            </div>
            <div className="flex items-center w-full p-10 font-serif text-2xl leading-10 text-white duration-500 transform bg-blue-600 rounded-r-lg shadow-xl shadow-gray-400 h-96 ring-4 ring-blue-500 hover:bg-blue-900">
                Nama : Gusti Riza Pradana
                <br /> Gmail : gustirezapradana@gmail.com
            </div>
        </div>
    );
};

export default About;
