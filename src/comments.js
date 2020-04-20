import React, { Component } from 'react';



class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then((data) => {
                this.setState({ comments: data })
            })
            .catch(console.log)
    }

    render() {
        return (<div className="container">
            {this.state.comments.map((comment) => (

                <div className="commentSection">
                    <h5 >{comment.name}</h5>
                    <h5>{comment.email}</h5>
                    <p>{comment.body}</p>
                </div>

            ))}
        </div>);
    }
}

export default Comments;

