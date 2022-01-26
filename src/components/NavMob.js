import React from 'react';

function NavMob() {
    return (
        <div>
            <div className='nav nav-mob' id="nav-mob">
                <a href="#"><img src="./imgs/nike-logo.png" alt="nike-logo" /></a>
                <div>
                    <i className="fas fa-shopping-bag"></i>
                    <i className="fas fa-search"></i>
                    <i className="fas fa-bars" id='menuBtn'></i>
                </div>

            </div>
            <div className="dropdownHide" id="dropdown">
                <ul>
                    <li><a href='#'>Hi, User</a></li>
                    <li><a href='#'>New Releases</a></li>
                    <li><a href='#'>Men</a></li>
                    <li><a href='#'>Women</a></li>
                    <li><a href='#'>Kids</a></li>
                    <li><a href='#'>Sale</a></li>
                    <li><a href='#'>Favourites <i className="far fa-heart"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavMob;
