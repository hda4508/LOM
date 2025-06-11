import React from 'react';

function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-6">
            <div className="font-bold text-2xl logo-font">LOM</div>
            <div className="space-x-6 text-sm">
                <a href="#">Page</a>
                <a href="#">Reel</a>
                <a href="#">Scene</a>
                <a href="#">Inside</a>
                <a href="#">Verses</a>
            </div>
        </nav>
    );
}
export default Navbar;