import React from 'react'
import ReactDOM from 'react-dom'

//CSS
import './styling/user-top.css'
import './styling/index.css'
import './styling/main.css'
import './styling/nav.css'
import './styling/setup.css'


const User = () => {
    return (
        <div className='user-wrapper'>
            <div className='user'>
                <a href='#'>Help</a>
                <p>|</p>
                <a href='#'>Hi, User</a>
                <a href='#'><i className="far fa-user"></i></a>
            </div>
        </div>
    )
}

const NavDesk = () => {
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

const NavMob = () => {
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

const TopMsg = () => {
    return (
        <div className="top-msg">
            <p>SAVE UP TO 40%</p>
            <a href="#">Shop All Our New Markdowns</a>
        </div>
    )
}

const ItemsWrapper = () => {
    return (
        <div className="outer-wrapper">
            <div className="desk-filters" id="desk-filters">
                <ul>
                    <li><a href="#">Running</a></li>
                    <li><a href="#">Lifestyle</a></li>
                    <li> <a href="#">Football</a></li>
                    <li><a href="#">Basketball</a></li>
                    <li><a href="#">Jordan</a></li>
                    <li><a href="#">Training</a></li>
                    <li><a href="#">Baseball</a></li>
                    <li><a href="#">Skateboarding</a></li>
                    <li><a href="#">Walking</a></li>
                    <li><a href="#">Tennis</a></li>
                    <li><a href="#">Sandals & Slides</a></li>
                </ul>
                <hr></hr>
                <p>Gender</p>
                <label for="men">
                    <input type="checkbox" value="Men" name="gender" id="men" />  Men
                </label>
                <br />
                <label for="women">
                    <input type="checkbox" value="Women" name="gender" id="women" />  Women
                </label>
                <br />
                <label for="kids">
                    <input type="checkbox" value="Kids" name="gender" id="kids" />  Kids
                </label>
                <hr></hr>
                <p>Kids</p>
                <label for="boys">
                    <input type="checkbox" value="Boys" name="kids" id="boys" />  Boys
                </label>
                <br />
                <label for="girls">
                    <input type="checkbox" value="Girls" name="kids" id="girls" />  Girls
                </label>
                <hr></hr>
                <p>Shop by Price</p>
                <label for="$0">
                    <input type="checkbox" value="0" name="price" id="$0" />  $0-$25
                </label>
                <br />
                <label for="$25">
                    <input type="checkbox" value="25" name="kids" id="$25" />  $25-$50
                </label>
                <br />
            </div>
            <div className="wrapper" id="wrapper">
                <Item
                    imgUrl={firstShoe.imgUrl}
                    msg={firstShoe.msg}
                    shoeName={firstShoe.shoeName}
                    shoeGender={firstShoe.shoeGender}
                    colorCount={firstShoe.colorCount}
                    price={firstShoe.price}
                />
                <Item
                    imgUrl={secondShoe.imgUrl}
                    msg={secondShoe.msg}
                    shoeName={secondShoe.shoeName}
                    shoeGender={secondShoe.shoeGender}
                    colorCount={secondShoe.colorCount}
                    price={secondShoe.price}
                />
                <Item
                    imgUrl={secondShoe.imgUrl}
                    msg={secondShoe.msg}
                    shoeName={secondShoe.shoeName}
                    shoeGender={secondShoe.shoeGender}
                    colorCount={secondShoe.colorCount}
                    price={secondShoe.price}
                />
                <Item
                    imgUrl={firstShoe.imgUrl}
                    msg={firstShoe.msg}
                    shoeName={firstShoe.shoeName}
                    shoeGender={firstShoe.shoeGender}
                    colorCount={firstShoe.colorCount}
                    price={firstShoe.price}
                />
                <Item
                    imgUrl={secondShoe.imgUrl}
                    msg={secondShoe.msg}
                    shoeName={secondShoe.shoeName}
                    shoeGender={secondShoe.shoeGender}
                    colorCount={secondShoe.colorCount}
                    price={secondShoe.price}
                />
            </div>
        </div>
    )
}

const firstShoe = {
    imgUrl: "./imgs/nike-shoe.jfif",
    msg: "Just In",
    shoeName: "Nike Lebron IX",
    shoeGender: "Men's Shoe",
    colorCount: 1,
    price: 95
}

const secondShoe = {
    imgUrl: "./imgs/nike-shoe2.jfif",
    msg: "Best Seller",
    shoeName: "Nike Airmax 90",
    shoeGender: "Men's Shoe",
    colorCount: 4,
    price: 125
}

const Item = ({ imgUrl, msg, shoeName, shoeGender, colorCount, price }) => {
    return (
        <a href="#" className="item">
            <img src={imgUrl} alt="nike-shoe" />
            <div className='item-desc'>
                <p>{msg}</p>
                <p>{shoeName}</p>
                <p>{shoeGender}</p>
                <p>{colorCount} Color</p>
                <p>${price}</p>
            </div>
        </a>
    )
}

const ShoeTypes = () => {
    return (
        <div className="shoe-types">
            <a href="#">Running</a>
            <a href="#">Lifestyle</a>
            <a href="#">Football</a>
            <a href="#">Basketball</a>
            <a href="#">Jordan</a>
            <a href="#">Training</a>
            <a href="#">Baseball</a>
            <a href="#">Skateboarding</a>
            <a href="#">Walking</a>
            <a href="#">Tennis</a>
            <a href="#">Sandals & Slides</a>
        </div>
    )
}

const FiltersSec = () => {
    return (
        <div className="filters-sec">
            <div>
                <button id='filterBtn'>Filter <i className="fas fa-filter"></i></button>
                <button id='filterBtnDesk'>Hide Filters</button>
            </div>
            <div className="price-sort" id="price-sort">
                <button id="sortBtn">Sort By <i className="fas fa-angle-down"></i></button>
                <div className="price-dropdown" id="price-dropdown">
                    <a href='#'>Featured</a>
                    <a href='#'>Newest</a>
                    <a href='#'>Price: High-Low</a>
                    <a href='#'>Price: Low-High</a>
                </div>
            </div>
        </div>
    )
}

const Filters = () => {
    return (
        <div className="filters" id='filters'>
            <div className="filters-top">
                <p>Filter</p>
                <i className="fas fa-times-circle" id='exitFilterBtn'></i>
            </div>
            <section className="filters-list">

            </section>
        </div>
    )
}

const App = () => {
    const shoeNumber = 150;
    return (
        <div>
            <User />
            <NavDesk />
            <NavMob />
            <TopMsg />
            <p style={{ margin: "20px auto", width: "90%", fontSize: "1.3rem" }}>Shoes & Sneakers ({shoeNumber})</p>
            <ShoeTypes />
            <hr></hr>
            <FiltersSec />
            <Filters />
            <ItemsWrapper />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdown");

menuBtn.addEventListener("click", function () {
    if (dropdown.classList.contains("dropdownHide")) {
        dropdown.classList.remove("dropdownHide");
        dropdown.classList.add("dropdownShow");
    } else if (dropdown.classList.contains("dropdownShow")) {
        dropdown.classList.add("dropdownHide");
        dropdown.classList.remove("dropdownShow");
    }
})

const exitFiltersBtn = document.getElementById('exitFilterBtn');
const filters = document.getElementById('filters');
exitFiltersBtn.addEventListener('click', function () {
    filters.style.display = "none";
})

const filterBtn = document.getElementById('filterBtn');

filterBtn.addEventListener('click', function () {
    filters.style.display = "block";
})

const priceSort = document.getElementById("price-sort");
const priceDropdown = document.getElementById("price-dropdown");

priceSort.addEventListener("click", function () {
    if (priceDropdown.classList.contains("price-dropdown")) {
        priceDropdown.classList.remove("price-dropdown");
        priceDropdown.classList.add("price-dropdownShow");
    } else if (priceDropdown.classList.contains("price-dropdownShow")) {
        priceDropdown.classList.add("price-dropdown");
        priceDropdown.classList.remove("price-dropdownShow");
    }
})

const filterBtnDesk = document.getElementById("filterBtnDesk");
const deskFilters = document.getElementById("desk-filters");
const wrapper = document.getElementById("wrapper");

filterBtnDesk.addEventListener("click", function () {
    if (deskFilters.classList.contains("desk-filters")) {
        deskFilters.classList.remove("desk-filters");
        deskFilters.classList.add("desk-filtersHide");
        filterBtnDesk.innerHTML = `Show Fitlers`;
        wrapper.classList.add("wrapperAnimated");
    } else if (deskFilters.classList.contains("desk-filtersHide")) {
        deskFilters.classList.add("desk-filters");
        deskFilters.classList.add("desk-filtersAnimated");
        deskFilters.classList.remove("desk-filtersHide");
        filterBtnDesk.innerHTML = `Hide Fitlers`
        wrapper.classList.remove("wrapperAnimated");
    }
})
