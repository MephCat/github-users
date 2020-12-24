import React, {Component} from 'react';
import './repos-list.css';
import {reposLoader} from "../../actions";
import compose from "../../utils/compose";
import withUsersService from "../hoc/with-users-service";
import {connect} from "react-redux";
import Spinner from "../spinner/spinner";

export class ReposList extends Component {

    state = {
        loading: true,
        repos: []
    }
    componentDidMount() {
        this.getRepos();
    }
    getRepos(){
        const {GithubApiService,userLogin} = this.props;
        const repos = GithubApiService.getRepos(userLogin)
            repos.then( (data) => {
                this.setState({
                    loading: false,
                    repos: data
                })
            })
    }
    render() {
        const {repos, loading} = this.state;
        if(loading || !this.state.repos ) {
            return <Spinner/>
        }
        if(repos.length === 0 && !loading){
            return <div>Not repos</div>
        }
        return(
            <div className='repos-list'>
                <h3>
                    Repos List
                </h3>

                <table>
                    <thead>
                    <tr>
                        <th>Repo Name</th>
                        <th>Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        repos.map((repo) => {
                            const updateDate = `${new Date(repo.updated_at).getFullYear()}.${new Date(repo.updated_at).getMonth()}.${new Date(repo.updated_at).getDate()}
                                                ${new Date(repo.updated_at).getHours()}:${new Date(repo.updated_at).getMinutes()}`
                            return (
                                <tr key={repo.id}>
                                    <td>
                                        {repo.name}
                                    </td>
                                    <td>
                                        {updateDate}
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = ({repos}) => {
    return {repos}
}
const mapDispatchToProps = {
    reposLoader
}

export default compose(
    withUsersService(),
    connect(
        mapStateToProps,
        mapDispatchToProps)
)(ReposList);