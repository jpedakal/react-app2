import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
    return (
        <div className="panel panel-success">
            <div className="panel-body">
                <div className="jumbotron">
                    <h2>Post Page</h2>
                    <p>Post is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <h3>JavaScript</h3>
                <Link to="/posts/JavaScript">Details</Link>
                <h3>React</h3>
                <Link to="/posts/React">Details</Link>
                <h3>Node</h3>
                <Link to="/posts/Node">Details</Link>
                <h3>Angular</h3>
                <Link to="/posts/Angular">Details</Link>
            </div>
        </div>
    )
}

export default Post;