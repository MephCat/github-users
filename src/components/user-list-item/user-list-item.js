import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import './user-list-item.css';

const UserListItem = ({user}) => {

    const {
        login,
        avatar_url,
        type
    } = user;
    return (
        <Fragment>
            <td >
                <Link to={ '/users/'+login} className='user-link'>
                    <div className="img-wrap">
                        <img src={ avatar_url } alt={login}/>
                    </div>
                    <span>{login}</span>
                </Link>
            </td>
            <td>
                {type}
            </td>
        </Fragment>
    )

}
export default UserListItem;