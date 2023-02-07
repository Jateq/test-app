import React, { Component } from "react";

export default class AppContent extends Component{

    anotherFunction = () => {
        console.log("another function");
    }

    leftParagraph = () => {
        console.log("left")
    }

    fetchList = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            let posts = document.getElementById("post-list");

            json.forEach(function(obj){
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(obj.title));
                posts.appendChild(li)
            })
        })
    }

    render(){
        return(
            <p>
                This is test site.

                <br/>
                <hr />
                <p onMouseEnter={this.anotherFunction} onMouseLeave={this.leftParagraph}> That is data</p>


                <button onClick = {this.fetchList} className ="btn btn-primary" >Login</button>
                
                <hr />

                <ul id = "post-list"></ul>

            </p>
        );
    }
}