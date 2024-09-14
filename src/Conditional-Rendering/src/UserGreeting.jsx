import PropTypes from 'prop-types'

function UserGreeting(props) {

         const welcomeMessage = <h2 className = "welcome-message">
                       Welcome {props.username}
                       </h2>;

         const loginPrompt = <h2 className = "login-prompt">
                    Welcome guest!<br></br>Please log in to contiue
                    </h2>

         return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
};



export default UserGreeting;