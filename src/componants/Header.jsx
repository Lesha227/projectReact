import React from 'react';
import { BrowserRouter, NavLink, Link } from 'react-router-dom';

const Header = ({ title }) => {
    return (
        <header className="w-full m-0">
            <div className="bg-gray-700 w-full drop-shadow-md flex">
                <div className="flex-grow">
                    <div>
                        <h1 className="text-slate-300 text-center p-4 text-5xl">{title}</h1>
                    </div>
                    <div className="flex justify-around w-3/4 mx-auto py-3">
                        <NavLink
                            to="/"
                            className="transform transition-transform duration-300 hover:scale-105 link inline-block bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/contactus"
                            className="transform transition-transform duration-300 hover:scale-105 link inline-block bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full"
                        >
                            Contact Us
                        </NavLink>
                        <NavLink
                            to="/branches"
                            className="transform transition-transform duration-300 hover:scale-105 link inline-block bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full"
                        >
                            Branches
                        </NavLink>
                        <NavLink
                            to="/login"
                            className="transform transition-transform duration-300 hover:scale-105 link inline-block bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full"
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
                <div className="w-[80px] flex justify-end items-center mr-[60px]">
                    <Link to="/">
                        <img src="./images/myLogo.png" alt="logo" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;