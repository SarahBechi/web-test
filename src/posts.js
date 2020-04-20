import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then((data) => {
                this.setState({ posts: data })
            })
            .catch(console.log)
    }

    render() {
        return (<div className="container">
            {this.state.posts.map((post) => (

                <div className="postSection">
                    <h5 >{post.title}</h5>
                    <h5>{post.body}</h5>
                    <Link to="/comments"><p>Comments</p></Link>
                </div>

            ))}
        </div>);
    }
}

export default posts;

