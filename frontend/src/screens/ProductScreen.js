import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function ProductScreen(props) {
    const product = data.products.find(x => x._id === props.match.params.id);

    return (
        <div >
            <div className="back-to-result">
                <Link to="/">Back to results</Link>
            </div>
            <div className="details">
                <div className="details-image">
                    <img src = {product.image} alt="product"></img>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} stars ({product.numReviews} Reviews)

              </li>
                        <li>
                           Price: <b>Rs {product.price}</b>
                        </li>
                        <li>
                            Description:
                  <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                     Price: {product.price}
                        </li>
                        <li>
                            Status: {product.status}
                        </li>
                        <li>
                            Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </li>
                        <button className="button">Add to Cart</button>
                    </ul>
                </div>
            </div>
        </div>

    );
}
export default ProductScreen;