import React from 'react';
import HigherOrderComponent from '../../hoc/HigherOrderComponent';
import classes from './Layout.css';

const layout = ( props ) => (
    <HigherOrderComponent>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </HigherOrderComponent>
);

export default layout;