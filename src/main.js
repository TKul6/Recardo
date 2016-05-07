/**
 * Created by Tomer on 07/05/2016.
 */
"use strict";

var React = require('react');
var ReactDom = require('react-dom');

var Menu = React.createClass({

    render : function(){
        return (<div>Hello, World</div>) }
    });



ReactDom.render(<Menu />,document.getElementById("main"));




