import React from 'react';
import useStyles from './styles';
// import {MDCTextField} from '@material/textfield';


const Login = () => {    
    const classes = useStyles();

    return (
        <>
        <div className={classes.form}>
            <input color="primary" name="username" label="Username" placeholder="Username" />
            <input name="password" label="Password" placeholder="Enter password" />
        </div>
        </>
    )
}

export default Login
