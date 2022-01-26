import React from 'react';

function NavDesk() {
    return (
        <div className='nav nav-desk' id="nav-desk">
            <a href="#"><img src="./imgs/nike-logo.png" alt="nike-logo" /></a>
            <div>
                <a href='#'>New Releases</a>
                <a href='#'>Men</a>
                <a href='#'>Women</a>
                <a href='#'>Kids</a>
                <a href='#'>Sale</a>
            </div>
            <ul>
                <li>
                    <a href='#'><i className="fas fa-search"></i></a>
                </li>
                <li><a href='#'><i className="fas fa-shopping-bag"></i></a></li>
                <li><a href='#'><i className="far fa-heart"></i></a></li>
            </ul>
        </div>
    )
}

export default NavDesk;
