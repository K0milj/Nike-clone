import React from 'react'
import ReactDOM from 'react-dom'

//Components imports
import User from './components/User'
import NavDesk from './components/NavDesk'
import NavMob from './components/NavMob'
import TopMsg from './components/TopMsg'
import ItemsWrapper from './components/ItemsWrapper'
import ShoeTypes from './components/ShoeTypes'
import FiltersSec from './components/FiltersSec'
import Filters from './components/Filters'

//CSS
import './styling/user-top.css'
import './styling/index.css'
import './styling/main.css'
import './styling/nav.css'
import './styling/setup.css'

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
