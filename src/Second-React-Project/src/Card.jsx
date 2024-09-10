import profilePicture from './assets/paris.png'

function Card() {
    return(
        <div className = "card">
            <img className = "card-image" src = {profilePicture} alt = "Profile picture"></img>
            <h2 className = "card-title">Yuval Shar</h2>
            <p className = "card-text">On the way to becoming a Full Stack Developer</p>
        </div>
    )
}

export default Card;