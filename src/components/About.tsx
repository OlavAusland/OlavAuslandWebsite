import '../styles/about.css'

export default function About(){

    return (
        <div className='about-container'>
            <div className='about-content shadow'>
                <h1>About</h1>
                <hr style={{borderBottomWidth:'1px', width:'100%'}}/>
                <p style={{alignSelf:'flex-start'}}>
                    Some Text
                </p>
            </div>
        </div>
    );
}