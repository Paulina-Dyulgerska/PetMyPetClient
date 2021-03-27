import React, { Component } from 'react';
import './DemoFormControlledRef.css';

class DemoFormControlled extends Component {

    options = [
        { value: 'it', label: 'IT' },
        { value: 'engineer', label: 'Engineer' },
        { value: 'unemployed', label: 'Unemployed' },
    ]

    emailErrorMessage = "There should be a .com text in the e-mail!";
    usernameErrorMessage = "There should be a ! or ? symbol in the username!";

    constructor(props) {
        super(props)

        this.state = {
            username: 'Pesho!',
            age: 18,
            biography: '...add biography...',
            occupation: 'please select one',
            errors: {
                email: false,
                username: false,
            },
        }

        this.emailInput = React.createRef();

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    async onSubmitHandler(e) {
        e.preventDefault(); //ako ne go hvana i spra tuk, tozi event - e, shte mi prezaredi stranicata!
        //daje i nqma da vidq console.log(e) kakwo mi izkarwa, zashtoto shte se prezaredi vednaga page-yt!
        // console.log(e);
        // console.log(e.target.username.value); //tagret mi e samata forma- ot username poleto, iskam mu value-to!
        // console.log(e.target.age.value);
        console.log({ ...this.state });
        // console.log(this.emailInput.current.value);

        if (!this.emailInput.current.value.includes('.com')) {
            console.log("Error wtih email");
            console.log(this.state.errors.email);
            await this.setState((prevState) => ({
                errors: {
                    // username: prevState.errors.username,
                    ...prevState.errors,
                    email: true,
                }
            }));
            console.log(this.state.errors.email);
            // this.emailInput.current.value = '';
            // this.emailInput.current.focus();
        } else {
            this.setState(() => ({ errors: { email: false } }));
        }

        if (!(this.state.username.includes('!') || this.state.username.includes('?'))) {
            console.log("Error with username");
            console.log(this.state.errors.username);
            await this.setState((prevState) => ({
                errors: {
                    // email: prevState.errors.email,
                    ...prevState.errors,
                    username: true,
                }
            }));
            console.log(this.state.errors.username);
            e.target.focus();
        } else {
            this.setState(() => ({ errors: { username: false } }));
        }
    }

    onClickHandler(e) {
        e.preventDefault();
        // console.log({ ...this.state });
        // const { username, age } = this.state;
        // console.log(username);
        // console.log(age);
    }

    // onUsernameChangeHandler(e) {
    //     console.log(e.target.value); //vzimam tekushtata stojnost na tozi field.
    //     this.setState({ username: e.target.value });
    // }

    // onAgeChangeHandler(e) {
    //     console.log(e.target.value);
    //     this.setState(() => ({age: e.target.value}));
    // }

    onChangeHandler(e) {
        console.log(e.target.value);
        this.setState(() => ({ [e.target.name]: e.target.value }));
    }

    render() {
        return (
            <section style={{ textAlign: 'center' }}>
                <h1>Demo Form Controlled Ref:</h1>
                <form onSubmit={this.onSubmitHandler.bind(this)} style={{ margin: '0 auto', maxWidth: '12rem' }}>
                    <label htmlFor="username" >Username:</label>
                    <input type="text"
                        name="username"
                        id="username"
                        autoFocus
                        defaultValue={this.state.username}
                        // onChange={this.onUsernameChangeHandler.bind(this)} 
                        // onChange={this.onChangeHandler.bind(this)}
                        onChange={this.onChangeHandler}
                    />
                    {this.state.errors.username &&
                        <span className='validationError'>
                            {this.usernameErrorMessage}
                        </span>
                    }

                    <label htmlFor="email" >Email:</label>
                    <input
                        ref={this.emailInput}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@pesho.com"
                    />
                    {/* <span className={`validationError ${this.state.errors.email && 'show'}`}>
                        Invalid e-mail!
                    </span> */}
                    {/* {console.log(this.state.errors.email)} */}
                    {this.state.errors.email &&
                        <span className='validationError'>
                            {this.emailErrorMessage}
                        </span>
                    }

                    <label htmlFor="age" >Age:</label>
                    <input type="number"
                        name="age"
                        id="age"
                        defaultValue={this.state.age}
                        // onChange={this.onAgeChangeHandler.bind(this)} 
                        // onChange={this.onChangeHandler.bind(this)} 
                        onChange={this.onChangeHandler}
                    />
                    {/* //tezi ne prashtat nikakyv request, zashtoto sa ot type="button"!!!
                <input type="button" value="Send" />
                <button type="button">I am a Button</button> */}
                    {/* tezi prashtat request, zashtoto sa ot type="submit" */}

                    <label htmlFor="biography">Biography:</label>
                    <textarea name="biography"
                        value={this.state.biography}
                        id="biography"
                        cols="30"
                        rows="3"
                        onChange={this.onChangeHandler}
                    ></textarea>

                    <label htmlFor="occupation">Occupation:</label>
                    {/* <select name="occupation" id="occupation" onChange={this.onChangeHandler}>
                        <option value={this.state.occupation}>{this.state.occupation}</option>
                        <option value="it">IT</option>
                        <option value="engineer">Engineer</option>
                        <option value="unemployed">Unemployed</option>
                    </select> */}
                    <select name="occupation"
                        id="occupation"
                        onChange={this.onChangeHandler}
                        value={this.state.occupation}>
                        {this.options.map((x, i) => {
                            return <option key={i} value={x.value}>{x.label}</option>
                        })}
                    </select>

                    <input type="submit" value="Send" />
                    <button type="submit" onClick={this.onClickHandler}>I am a Button</button>
                </form>
            </section>
        );
    }
}

export default DemoFormControlled;



