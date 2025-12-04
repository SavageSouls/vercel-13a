import React from "react";
export default class Courses extends React.Component {
    state = {
        courses: [],
    }

    componentDidMount(){
        fetch('/api/heroku-mysql-courses')
        .then(res => res.json())
        .then(courses =>{
            
        })
    }

    render(){
        return(
            <>
                {JSON.stringify(this.state.courses)}
            </>
        )
    }
}