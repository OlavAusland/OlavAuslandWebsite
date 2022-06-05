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
        <img src={user.avatar_url} style={{borderRadius:'10px'}} alt='Profile Picture'/>
        <div style={{marginLeft:25}}>
          <h1>{user.login}</h1>
          <p>{user.bio}</p>
          <hr style={{borderBottomWidth:'1px', width:'100%'}}/>
          <h3>Location:</h3>{user.location}
          <h3>Email:</h3>{user.email}
        </div>
      </div>
      <div style={{flex:1}}>
      <div className='repositories shadow'>
        <h1>Repositories</h1>
        <hr style={{borderBottomWidth:'1px', width:'100%'}}/>
          <div className='card-container'>
            {repos.map((repo: Repository) => (
                <div className='card shadow' key={repo.id}>
                  <h1>{repo.name}</h1>
                  <p>{repo.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}