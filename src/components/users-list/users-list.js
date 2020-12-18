import React, {Component} from 'react';
import UserListItem from "../user-list-item";
import {usersLoader} from "../../actions";
import compose from "../../utils/compose";
import withUsersService from "../hoc/with-users-service";
import {connect} from "react-redux";
import Spinner from "../spinner/spinner";

import './users-list.css';
import FormSearch from "../form-search";

class UsersList extends Component {

    componentDidMount() {
        // получаем данные
        const {GithubApiService, usersLoader} = this.props;
        GithubApiService.getUsers().then( (data) => {
            return usersLoader(data)
        })
    }

    render() {
        const {users, loading} = this.props;
        if (loading || !users) {
            return <Spinner/>
        }

        const lengthUsers = () => {
            if(users.length === 0) {
                return <div>Users not found</div>
            } else {
                return (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <UserListItem user={user}/>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>)
            }
        }
        return (
            <React.Fragment>
                <FormSearch/>
                { lengthUsers() }
            </React.Fragment>

        )
    }
}

// описывает какие данные хотим получить из стора
const mapStateToProps = ({users, loading}) => {
    return {users, loading}
}
// описывает какие действия будет передовать в стор
const mapDispatchToProps = {
    usersLoader
}
// connect оборачивает компонет UsersList в hoc
// который подключается к стору
export default compose(
    withUsersService(),
    connect(
        mapStateToProps,
        mapDispatchToProps)
)(UsersList);
