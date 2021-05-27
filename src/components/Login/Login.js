import { useEffect, useState } from "react";
// import firebase, { auth } from '../../utils/firebase';
import authentication from '../../utils/firebase';
import InputError from '../Shared/InputError/InputError';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState();

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        authentication.login(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user.email);
                console.log(userCredential);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setErrorMessage(errorMessage);
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <section className="login">
            <form onSubmit={onLoginFormSubmitHandler}>
                <fieldset>
                    <legend>Login</legend>
                    <InputError>{errorMessage}</InputError>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                            <span className="actions"></span>
                            <i className="fas fa-user"></i>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <span className="actions"></span>
                            <i className="fas fa-key"></i>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    )
}

export default Login;