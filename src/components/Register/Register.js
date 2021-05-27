import { useEffect, useState } from "react";
// import firebase, { auth } from '../../utils/firebase';
import authentication from '../../utils/firebase';
import InputError from '../Shared/InputError/InputError';

const Register = () => {

    const [errorMessage, setErrorMessage] = useState();

    const onRegisterFormSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const repeatPassword = e.target.repeatPassword.value;

        authentication.register(email, password, repeatPassword)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user.email);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                setErrorMessage(errorMessage);
                console.log(errorCode, errorMessage);
            });
    }



    return (
        <section className="register">
            <form onSubmit={onRegisterFormSubmitHandler}>
                <fieldset>
                    <legend>Register</legend>
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
                    <p className="field">
                        <label htmlFor="repeatPassword">Password</label>
                        <span className="input">
                            <input type="password" name="repeatPassword" id="repeatPassword" placeholder="Repeat password" />
                            <span className="actions"></span>
                            <i className="fas fa-key"></i>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    )
}

export default Register;