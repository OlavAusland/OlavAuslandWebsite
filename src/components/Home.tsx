import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import '../styles/loader.css'
import { getRepos, getUser } from '../api/githubAPI';
import { GithubUser, Repository } from '../domain/Github';

export default function Home(){
  const [user, setUser] = useState<GithubUser>({} as GithubUser);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      await getUser().then((user) => {setUser(user);});
      await getRepos().then((repos) => {setRepos(repos);});
    }
    fetchData()
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1000);


  if(loading){return (<div className='pong-loader'><br/></div>);}

  return (
    <div className='container'>
      <div className='content shadow'>
        <img src={user.avatar_url} style={{borderRadius:'10px 0px 0px 10px'}} height='100%' alt='Avatar'/>
        <div style={{marginLeft:25}}>
          <h1>{user.login}</h1>
          <p>{user.bio}</p>
          <hr style={{borderBottomWidth:'1px', width:'100%'}}/>
          <h3>Github Info:</h3>  
          <div style={{flex:1}}>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Public Repos: {user.public_repos}</p>
          </div>
          <h3>Socials</h3>
          <div className='socials'>
            <img onClick={() => {window.location.href='https://www.facebook.com/olav.auslandonstad'}} alt='facebook' 
              src={require('../assets/images/Facebook_Icon.png')}/>
            <img onClick={() => {window.location.href='https://www.linkedin.com/in/olav-ausland-onstad-927193195'}} alt='linkedIn'
              src={require('../assets/images/LinkedIn_Icon.png')}/>
            <img onClick={() => {window.location.href='https://github.com/OlavAusland'}} alt='github'
              src={require('../assets/images/Github_Icon.png')}/>
          </div>
        </div>
      </div>
      <div className='repositories shadow'>
        <h1>Repositories</h1>
        <hr style={{borderBottomWidth:'1px', width:'100%'}}/>
        <div className='card-container'>
          {repos.map((repo: Repository) => (
              <div onClick={() => {window.location.href=repo.html_url}} className='card shadow' key={repo.id}>
                <div style={{flex:1}}>
                  <h1 style={{fontSize:'1vw'}}>{repo.name}</h1>
                </div>
                <div style={{flex:3}}>
                  <p>{repo.description}</p>
                </div>
                <div className='stargazers'>
                  <p>⭐{repo.stargazers_count}</p>
                  <p>👁️{repo.watchers_count}</p>
                  <p>🍴{repo.forks_count}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div style={{flex:1}}/>
    </div>
  );
}