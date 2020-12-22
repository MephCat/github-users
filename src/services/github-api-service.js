

export default class GithubApiService {
    _apiBase = 'https://api.github.com';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    getUsers = () => {
        return this.getResource(`/users`);
    }
    searchUsers = (name) => {
        return this.getResource(`/search/users?q=${name}+in:user`);
    }
    getUser = (name) => {
        return this.getResource(`/users/${name}`);
    }
}