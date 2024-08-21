import React, { useState } from 'react';
import Header from '../componants/Header';
import Footer from '../componants/Footer';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log("Logging in...");
        } else {
            console.log("Registering...");
        }
    };

    return (
        <div className='bg-gray-800'>
            <Header bgColor="purple-100" titleColor="black" title={isLogin ? "Login" : "Register"} />
            <div className='flex justify-center'>
                <div className="mt-[220px] mb-[150px] bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-lg flex justify-center">
                    <div className="w-full">
                        <h2 className="text-2xl font-bold text-center text-slate-300 mb-4">
                            {isLogin ? "Login" : "Register"}
                        </h2>
                        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
                            {!isLogin && (
                                <>
                                  
                                    <div className="col-span-1">
                                        <label className="block text-slate-300">Nickname</label>
                                        <input
                                            type="text"
                                            id="username"
                                            className="w-full mt-1 p-1 border border-gray-500 bg-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                                            placeholder="Enter your Nickname"
                                            required
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <label className="block text-slate-300">Date of Birth</label>
                                        <input
                                            type="date"
                                            className="w-full mt-1 p-1 border border-gray-500 bg-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                                        />
                                    </div>
                                </>
                            )}
                            <div className={`col-span-${isLogin ? 2 : 1}`}>
                                <label className="block text-slate-300">E-mail</label>
                                <input
                                    type="email"
                                    id="Email"
                                    className="w-full mt-1 p-1 border border-gray-500 bg-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                                    placeholder="E-mail adress"
                                    required
                                />
                            </div>
                            <div className={`col-span-${isLogin ? 2 : 1}`}>
                                <label className="block text-slate-300">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full mt-1 p-1 border border-gray-500 bg-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                                    placeholder="password min. 6 characters"
                                    required
                                />
                            </div>
                            {!isLogin && (
                                <div className="col-span-2">
                                    <label className="block text-slate-300">Confirm Password</label>
                                    <input
                                        type="password"
                                        id='password'
                                        className="w-full mt-1 p-1 border border-gray-500 bg-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                                        placeholder='Repeat password'
                                        required
                                    />
                                </div>
                            )}
                            <div className="col-span-2">
                                <button
                                    type="submit"
                                    className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-700 transition duration-300"
                                >
                                    {isLogin ? "LOG IN" : "REGISTER ACCAUNT"}
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 text-center">
                            <button
                                className="text-green-400 hover:underline"
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin ? "Don't have an account? Register a gaijin.net account – it's easy, fast and free!" : "Already have an account? Login"}
                            </button>
                        </div>
                    </div>  
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
