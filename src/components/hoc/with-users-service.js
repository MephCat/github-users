import React from 'react';
import { UsersServiceConsumer} from "../github-service-context";

const withUsersService = () => (Wrapped) => {
    return (props) => {
        return (
            <UsersServiceConsumer>
                {
                    (GithubApiService) => {
                        return (<Wrapped {...props}
                                         GithubApiService={GithubApiService}/>)
                    }
                }
            </UsersServiceConsumer>
        )
    }
}
export default withUsersService;