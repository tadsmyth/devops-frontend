import React from 'react';
import LoginForm from '../userAuthentication/LoginForm';
import Register from '../userAuthentication/Register';


//isnt working not sure why
function Today(props) {
    return (
        <div>
           <h1>in today section</h1>
           <LoginForm />
           <Register />
        </div>
    );
}

export default Today;