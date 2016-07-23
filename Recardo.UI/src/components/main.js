/**
 * Created by Tomer on 07/05/2016.
 */
"use strict";


import React from 'react';
import ReactDom from'react-dom';
import {lightBlueA700,cyan900,grey700,teal500} from '../../node_modules/material-ui/styles/colors';
import getMuiTheme from '../../node_modules/material-ui/styles/getMuiTheme';
import MuiThemeProvider from '../../node_modules/material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import Login from 'login'

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: cyan900,
        textColor: grey700,
        canvasColor: teal500
    }
});


 class Home extends React.Component {
    render() {
        return  <MuiThemeProvider muiTheme={muiTheme}>
        <div>
            <div className="row">header
            <Login userName='' />jjjj
            </div>
            <div className="divider"></div>
                <div className="container">
                    <div className="col s6 offset-s3">
                        <h1 className="header">Recardo</h1>
                    </div>
                    <div className="col s6 offset-s3">
                        <h3 className="center-align">A web application to to manage financial transaction</h3>
                    </div>
                    <div className="col s8 offset-s2">
                        <div>
                            <FlatButton  label="Start Now"  primary={true} linkButton={true} href="#" rippleColor={lightBlueA700}
                                         icon={<FontIcon className="material-icons">power_settings_new</FontIcon>} />
                            <FlatButton  label="Log In" primary={true}  href="#" rippleColor={lightBlueA700}
                                         icon={<FontIcon className="material-icons">account_circle</FontIcon>} />
                            <FlatButton  label="About Us" primary={true} linkButton={true} href="#" rippleColor={lightBlueA700}
                                         icon={<FontIcon className="material-icons">people</FontIcon>}/>
                        </div>
                    </div>
                </div>
            </div>
        </MuiThemeProvider>;
    }

 }



ReactDom.render(<Home />,document.getElementById("main"));
