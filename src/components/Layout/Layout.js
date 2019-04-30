import React from 'react';
import HigherOrderComponent from '../../hoc/HigherOrderComponent';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
    <HigherOrderComponent>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </HigherOrderComponent>
);

export default layout;