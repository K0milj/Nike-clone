import React from 'react';
import Item from './Item';

import { shoes } from '../shoes'

function ItemsWrapper() {
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
                {shoes.map(shoe => {
                    return (
                        <Item {...shoe} key={shoe.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default ItemsWrapper;
