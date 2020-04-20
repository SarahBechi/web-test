import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ users: data })
            })
            .catch(console.log)
    }

    render() {
        return (<div className="container">
            {this.state.users.map((user) => (

                <div className="userCard">
                    <img src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" style={{ "width": "150px", "height": "180px", "margin-left": "62px" }} alt="icon"></img>
                    <h5 >{user.name}</h5>
                    <h6>{user.email}</h6>
                    <p>{user.company.catchPhrase}</p>

                    <Link to="/posts"> <button>Follow</button></Link>
                </div>
            ))}
        </div>);
    }
}

export default Users;

