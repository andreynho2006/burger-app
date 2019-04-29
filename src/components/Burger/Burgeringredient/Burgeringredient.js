
import React from 'react';
import classes from './BurgerIngredient.css';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classes.Bread.Top}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case ('meet'):
            ingredient = <div className={classes.Meat}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case ('bacon'):
            ingredient = <div className={classes.}></div>;
            break;
        case ('salad'):
            ingredient = <div className={classes.Saladt}></div>;
            break;
        default:
            ingredient = null;
            break;
    }
    return ingredient;
};

export default burgerIngredient;