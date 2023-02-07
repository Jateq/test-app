import React, { Component, Fragment } from "react";
import "./AppFooter.css"

export default class AppFooter extends Component{

    render(){
        const curYear = new Date().getFullYear()
        return (
            <Fragment>
                <hr />
                <p className="footer">Copyright &copy; { curYear } Kazakh-British Technical University. Golang</p>
            </Fragment>
        );
    }
}