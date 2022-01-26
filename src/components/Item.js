import React from "react"

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

export default Item