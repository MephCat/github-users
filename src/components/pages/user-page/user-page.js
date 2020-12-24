import React, {Component} from 'react';
import {userLoader, loadingInfo} from "../../../actions";
import compose from "../../../utils/compose";
import withUsersService from "../../hoc/with-users-service";
import { connect } from "react-redux";
import Spinner from "../../spinner/spinner";
import ReposList from '../../repos-list';

import './user-page.css'

class UserPage extends Component {

    componentDidMount() {
        this.getUser();
    }
    getUser() {
        const userName = this.props.match.params.id;
        const {GithubApiService, userLoader} = this.props;
        GithubApiService.getUser(userName).then( (data) => {
            return userLoader(data);
        })
    }
    render (){
        const {user, loading} = this.props;
        if (loading || !user) {
            return <Spinner/>
        }
        if(user === {}){
            return <div>User not found</div>
        }
        return (
            <div className='user-page'>
                <div className="top">
                    <button className='go-back-link' onClick={(e) => {
                        e.preventDefault();
                        window.history.back();
                    }}>
                        Go Back
                    </button>
                </div>
                <div className="user-info">
                    <div className="avatar-wrap">
                        <img src={user.avatar_url} alt={user.login} />
                    </div>
                    <div className="user-info-wrapper">
                        <div className="title">
                            Login <span>{user.login}</span>
                        </div>
                        <div className="title">
                            Full name <span>{user.name}</span>
                        </div>
                        <div className="title">
                            Company <span>{user.company}</span>
                        </div>
                        <div className="title">
                            Location <span>{user.location}</span>
                        </div>
                        <div className="title">
                            Role <span>{user.type}</span>
                        </div>
                        <div className="title">
                            Create <span>{user.created_at.split('T')[0]}</span>
                        </div>
                    </div>
                </div>
                <ReposList userLogin={user.login}/>
            </div>
        )
    }
}
const mapStateToProps = ({user, loading}) => {
    return {user, loading}
}
const mapDispatchToProps = {
    userLoader, loadingInfo
}

export default compose(
    withUsersService(),
    connect(
        mapStateToProps,
        mapDispatchToProps)
)(UserPage);