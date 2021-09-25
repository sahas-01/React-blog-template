import React from 'react'
import Navstyle from './Navstyle.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1>SV's Blog</h1>
            <li className="links">
                <a href="/">Home</a>
                <a href="/create">Add Blog</a>
            </li>
        </nav>
    )
}
