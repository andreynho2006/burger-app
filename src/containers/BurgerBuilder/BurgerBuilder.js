import React, { Component } from 'react';
import HigherOrderComponent from '../../hoc/HigherOrderComponent';

class BurgerBuilder extends Component {
    render() {
        return (
            <HigherOrderComponent>
                <div>
                    Burger
                </div>
                <div>
                    Buil Controls
                </div>
            </HigherOrderComponent>
        );
    }
}

export default BurgerBuilder;