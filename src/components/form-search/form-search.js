import React, { Component } from 'react';
import {usersSearch} from "../../actions";

import './form-search.css';
import compose from "../../utils/compose";
import withUsersService from "../hoc/with-users-service";
import {connect} from "react-redux";

class  FormSearch extends Component {

    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value.toUpperCase()
        })
    }
    onSubmit = async (e) => {
        e.preventDefault();
        if(this.state.label.length !== 0){
            const {GithubApiService, usersSearch} = this.props;
            await GithubApiService.searchUsers(this.state.label)
                .then( data => {
                    usersSearch(data.items)
                })
        }
    };

    render () {
        return (
            <form className='form-search'
                  onSubmit={this.onSubmit}>
                <input type="text"
                       value={this.state.label}
                       onChange={this.onLabelChange}
                       placeholder='Поиск пользователя GIthub'/>
                <button type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        )
    }
}
const mapStateToProps = ({users, loading}) => {
    return {users, loading}
}
const mapDispatchToProps = {
    usersSearch
}
export default compose(
    withUsersService(),
    connect(
        mapStateToProps,
        mapDispatchToProps)
)(FormSearch);