import React from  'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Login from './Login';
import Register from './Register';


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