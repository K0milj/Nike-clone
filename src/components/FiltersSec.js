import React from 'react';

function FiltersSec() {
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

export default FiltersSec;
