import { GithubUser, Repository } from "../domain/Github";

export const getUser = (): Promise<GithubUser> => {
    return fetch("https://api.github.com/users/OlavAusland")
        .then(response => response.json())
        .then(json => {
            const user = json as GithubUser;
            return user;
        });
}

export const getRepos = () => {
    return fetch("https://api.github.com/users/OlavAusland/repos")
        .then(response => response.json())
        .then(json => {
            const repos = json as Repository[];
            repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
            return repos;
        });
}