import React from "react";
import { connect } from "react-redux"
import {fetchUser} from "../actions";
import {Link} from "react-router-dom";

class PostScreen extends React.Component{

    componentDidMount(){    
        const postUserId = this.props.location.state[0].userId;
        this.props.fetchUser(postUserId);
    }

    render(){
        const name = this.props.users.name
        const { title, body } = this.props.location.state[0];
        if (!name){
            return null;
        }

        return(
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <h6 className="card-subtitle mb-2 text-muted">author: {name}</h6>
                        <p className="card-text">{body}</p>
                        <Link to="/" >Back</Link>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {users: state.users}
}


export default connect(mapStateToProps, {fetchUser})(PostScreen);