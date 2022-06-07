import '../styles/about.css'

export default function About(){

    return (
        <div className='about-container'>
            <div className='about-content shadow'>
                <h1>About</h1>
                <hr style={{borderBottomWidth:'1px', width:'100%'}}/>
                <p style={{alignSelf:'flex-start'}}>
                    Hi! I am a {new Date().getFullYear() - 2001} year old student at the University of Agder in Norway.
                    I am currently taking a bachelor degree in Computer Science and i want to continue on a masters in Artificial Intelligence.

                    I am currently seeking an internship in the field of Computer Science and software development.&nbsp;
                    If you want to know more about me, feel free to navigate to the contact page, or contact me on any of my listed platforms. 
                    If you want to follow up on what i am creating / doing, navigate to the records tab and check out my posts or go to the landing page and look at my repositories.
                </p>
            </div>
        </div>
    );
}