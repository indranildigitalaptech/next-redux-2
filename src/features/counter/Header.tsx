import React from 'react'

const Header = () => {
    console.log("Header");
    return (
        <>
            <h1 className="text-5xl font-bold text-white mb-2 text-center">Redux Counter</h1>
            <p className='text-white/80 text-sm text-center mb-8'>An example of a simple counter application using Redux Toolkit.</p>
        </>
    )
}

export default Header