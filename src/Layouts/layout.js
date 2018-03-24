import React from 'react';
import Aux from '../Hoc/auxiliary';
import classes from './layout.css'
const layout = (props) =>(
    <Aux>
        <div>SideBar</div>
        <main className={classes.Content}>{props.children}</main>
    </Aux>

);

export default layout;


