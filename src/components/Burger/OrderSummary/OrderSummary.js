import React, { Component } from "react";
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] will update');
    }
    
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(ingKey => {
            return (
                <li key={ingKey}>
                <span style={{textTransform: 'capitalize'}}>
                {ingKey}</span>: {this.props.ingredients[ingKey]}
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
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.purchaseCancelled} btnType='Success'>CANCEL</Button>
                <Button clicked={this.props.purchaseContinued} btnType='Danger'>CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;
