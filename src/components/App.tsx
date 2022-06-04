import React, { useState, useEffect } from 'react';
import '../styles/app.css';
import { getRepos, getUser } from '../api/githubAPI';
import { GithubUser, Repository } from '../domain/Github';

function App(){
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
      <header className='header shadow'>
        <h1 style={{justifySelf:'flex-start'}}>Olav Ausland Onstad</h1>
        <div>
          <button>Contact</button>
          <button>About</button>
        </div>
      </header>
      <div className='content'>
        <div className='card-container'>
          {repos.map((repo, index) => (
            <div className='card shadow' key={index}>
              <h2 style={{flex:1}}>{repo.name}</h2>
              <p style={{flex:3}}>{repo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
