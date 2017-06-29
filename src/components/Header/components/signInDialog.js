import React from  'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Login from '../../../containers/Login/index';
import Register from '../../../containers/Register/index';


const signInDialog = () => (
    <Tabs>
        <Tab label='Login'>
            <Login/>
        </Tab>
        <Tab label='Register'>
            <Register/>
        </Tab>
    </Tabs>
)

export default signInDialog;