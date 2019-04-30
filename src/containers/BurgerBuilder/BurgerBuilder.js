import React, { Component } from 'react';
import HigherOrderComponent from '../../hoc/HigherOrderComponent';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            chesse: 0,
            meat: 0
        }
    }

    render() {
        return (
            <HigherOrderComponent>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </HigherOrderComponent>
        );
    }
}

export default BurgerBuilder;