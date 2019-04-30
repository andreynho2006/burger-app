import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import HigherOrderComponent from '../../../hoc/HigherOrderComponent';

const sideDrawer = (props) => {
    return (
        <HigherOrderComponent>
            <Backdrop show/>
            <div className={classes.SideDrawer}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </HigherOrderComponent>
        
    );
}

export default sideDrawer;