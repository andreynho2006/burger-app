import React from 'react';
import HigherOrderComponent from '../../hoc/HigherOrderComponent';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = ( props ) => (
    <HigherOrderComponent>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </HigherOrderComponent>
);

export default layout;