import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="flex flex-col items-center justify-around gap-10 mt-10 sm:flex-row">
            <a href="/" className="text-2xl">Matees.net</a>
            <div className="flex flex-col items-center sm:flex-row min-w-fit gap-28">
                <a href="/projects" className="text-xl font-light">Projects</a>
                <a href="/about" className="text-xl font-light">About</a>
                <a href="https://github.com/maytees"><Image width={30} height={30} src={'/github-mark.svg'} alt={''} /></a>
            </div>
        </nav>
    )
}

export default Navbar