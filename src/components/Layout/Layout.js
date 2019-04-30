import React, { Component } from 'react';
import HigherOrderComponent from '../../hoc/HigherOrderComponent';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer : true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    render() {
        return (
            <HigherOrderComponent>
                <Toolbar />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </HigherOrderComponent>
        );
    }
}

export default Layout;