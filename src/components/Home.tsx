import React, { useState, useEffect } from 'react';
import '../styles/app.css';
import { getRepos, getUser } from '../api/githubAPI';
import { GithubUser, Repository } from '../domain/Github';

export default function Home(){
  const [user, setUser] = useState<GithubUser>({} as GithubUser);
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();
      const repos = await getRepos();
      console.log(user)
      setUser(user);
      setRepos(repos);
      console.log(repos)
    }
    fetchData()
  }, []);

  return (
    <div className='container'>
      <div className='content'>
        <div style={{flex:1}} className='card-container'>
          {repos.map((repo, index) => (
            <div onClick={() => {window.location.href=repo.html_url}} className='card shadow' key={index}>
              <h2 style={{flex:1}}>{repo.name}</h2>
              <p style={{flex:3}}>{repo.description}</p>
              <p>{user.login}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}