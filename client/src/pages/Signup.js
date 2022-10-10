import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
    const [inputState, setInputState] = useState({username: '', password: '', confirmPassword: ''})
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputState({ ...inputState, [name]: value, }); 
        handleValidate(event)
    };

    const [inputError, setInputErrorState] = useState({username: '', password: '', confirmPassword: ''})

    const handleValidate = (event) => {
        let { name, value } = event.target;
        setInputErrorState (validate => {
            const validation = {...validate, [name]: ""}
            switch (name) {
                case "username":
                    if (!value) {
                        validation[name] = "Username cannot be blank!"
                    }
                break
    
                case "password":
                    if (!value) {
                        validation[name] = "Password cannot be blank!"
                    } else if (inputState.confirmPassword && value !== inputState.confirmPassword) {
                        validation["confirmPassword"] = "Passwords do not match!"
                    } else {
                        validation[name] = ""
                    }
                break

                case "confirmPassword":
                    if (!value) {
                        validation[name] = "Please confirm password!"
                    } else if (inputState.password && value !== inputState.password) {
                        validation[name] = "Passwords do not match!"
                    } else {
                        validation[name] = ""
                    }
                break

                default:
                break
            }
            return validation
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await addUser({
            variables: { ...inputState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };


    return (
        <main className="center-horizontal">
            <div className="container">
                <h2>Sign Up</h2>
                <div className="line" />
                <form onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">USERNAME</label>
                        <input type="text" id="username" name="username" placeholder="Username" onChange={handleChange} value={inputState.username} onBlur={handleValidate}></input>
                        {inputError.username && <span className='errorMessage'>{inputError.username}</span>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} value={inputState.password} onBlur={handleValidate}></input>
                        {inputError.password && <span className='errorMessage'>{inputError.password}</span>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder='Password Confirm' onChange={handleChange} value={inputState.confirmPassword}></input>
                        {inputError.confirmPassword && <span className='errorMessage'>{inputError.confirmPassword}</span>}
                    </div>
                    <div className="center-horizontal">
                        <input type="submit" className="button" id="signin" value="Sign Up"></input>
                    </div>
                </form>
                {error && <div>Signup failed</div>}
            </div>
        </main>
    );
}

export default Signup;