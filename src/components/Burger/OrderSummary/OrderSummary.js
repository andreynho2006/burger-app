import React from 'react';
import HigherOrderComponent from '../../../hoc/HigherOrderComponent';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: 
                    {props.ingredients[igKey]}
                </li>
            )
    });
    return (
        <HigherOrderComponent>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </HigherOrderComponent>
    )
};

export default orderSummary;