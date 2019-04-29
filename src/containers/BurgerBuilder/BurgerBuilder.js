import React, { Component } from 'react';
import HigherOrderComponent from '../../hoc/HigherOrderComponent';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            chesse: 2,
            meat: 2
        }
    }

    render() {
        return (
            <HigherOrderComponent>
                <Burger ingredients={this.state.ingredients} />
                <div>Buil Controls</div>
            </HigherOrderComponent>
        );
    }
}

export default BurgerBuilder;