import React from "react";
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
        return (
            <li key={ingKey}>
            <span style={{textTransform: 'capitalize'}}>
            {ingKey}</span>: {props.ingredients[ingKey]}
            </li>
        )
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious Burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseCancelled} btnType='Success'>CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType='Danger'>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;
