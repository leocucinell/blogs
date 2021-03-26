import React from "react";
import { connect } from "react-redux";
import { fetchPosts, fetchUser } from "../actions"
import { Link } from "react-router-dom"

class BlogList extends React.Component{

    componentDidMount(){
        this.props.fetchPosts()
    }

    renderPostList() {
        return this.props.posts.map((post) => {
            return (
                <div className="card" key={post.id} style={{ marginBottom: 8 }}>
                    <h4 className="card-title" style={{marginLeft: 8, marginTop: 5}}>{post.title}</h4>
                        <div className='card-body'>
                            {post.body} <br/>
                            <Link 
                                style={{margin: 5}} 
                                className="btn btn-outline-primary" 
                                to={{
                                    pathname:"/post",
                                    state: [{userId: post.userId, title: post.title, body: post.body}]
                                }}
                            >Check out post</Link>
                        </div>
                </div>
            );
        });
    };

    render(){
        return(
            <div>
                {this.renderPostList()}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, {fetchPosts, fetchUser})(BlogList);