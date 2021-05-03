import React, { Component } from 'react'
import axios from 'axios';
class Blog extends Component {
    state= {
        myArray:[]
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            this.setState({
                myArray: res.data
            })
            console.log(res.data);
        })
    }
    render() {
        return (
            <div>
                <h1>DATA API</h1>
                {this.state.myArray.map(user =><div key={user.id}>your name is :<h2>{user.name}</h2>and your username is : <h2>{user.username}</h2></div>)}
            </div>
        )
    }
}export default Blog;
