import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button 
                onClick={props.func} 
                key={props.key} 
                className={`${props.number == props.page ? 'myBg' : ''} bg-cyan-600 hover:bg-cyan-800 text-yellow-400 font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-300 focus:text-red-600 focus:ring-opacity-50 m-2 mx-5`}
            >
                {props.number}
            </button>
        </div>
    )
}

export default Button
