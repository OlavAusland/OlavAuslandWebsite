import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import { getRepos, getUser } from '../api/githubAPI';
import { GithubUser, Repository } from '../domain/Github';

export default function Home(){
  const [user, setUser] = useState<GithubUser>({} as GithubUser);
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();
      const repos = await getRepos();
      setUser(user);
      setRepos(repos);
    }
    fetchData()
  }, []);

  return (
    <div className='container'>
      <div className='content shadow'>
        <img src={user.avatar_url} style={{borderRadius:'10px'}} alt='Avatar'/>
        <div style={{marginLeft:25}}>
          <h1>{user.login}</h1>
          <p>{user.bio}</p>
          <hr style={{borderBottomWidth:'1px', width:'100%'}}/>
          <h3>Github Info:</h3>  
          <div>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Public Repos: {user.public_repos}</p>
          </div>
          
          <h3>Location:</h3>{user.location}
        </div>
      </div>
      <div style={{flex:1}}>
      <div className='repositories shadow'>
        <h1>Repositories</h1>
        <hr style={{borderBottomWidth:'1px', width:'100%'}}/>
          <div className='card-container'>
            {repos.map((repo: Repository) => (
                <div onClick={() => {window.location.href=repo.html_url}} className='card shadow' key={repo.id}>
                  <div style={{flex:1}}>
                    <h1>{repo.name}</h1>
                  </div>
                  <div style={{flex:4}}>
                    <p>{repo.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}