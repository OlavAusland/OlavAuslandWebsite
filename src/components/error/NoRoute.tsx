import '../../styles/error.css';

export default function NoRoute(){
    return (
        <div className="no-route-container">
            <h1 style={{color:'red'}}>404</h1>
            <p>The page you are looking for does not exist</p>
        </div>
    );
}