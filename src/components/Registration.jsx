import React, {useState} from 'react';

const Registration = (props) => {

    const[formState,setFormState] = useState({
        'fullName' : "",
        'email' : "",
        'password' : "",
        'confirmPassword' : ""
    })

    const [ validState, setValidState] = useState ({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false
    });
    const changeHandler = (e) =>{

        const {name, value} = e.target

        setFormState({
            ...formState,
            [name] : value
        })
    }
    const sumbitHandler = (e) => {
        let firstName =false;
        let lastName =false;
        let email = false;
        let password = false; 
        let confirmPassword= false;

        e.preventDefault();
        if (formState.firstName.length === 0){
            firstName = true;
        }
        if (formState.lastName.length === 0){
            lastName = true;
        }
        if(! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(formState.email)) {
            email = true;
        }
        if (formState.password.length < 5){
            password = true;
        }
        if(formState.password !== formState.confirmPassword){
            confirmPassword = true;
        }
        setValidState({
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        })
    }


    return(
        <div>
            <h1>Registration</h1>
            <form onSubmit={sumbitHandler}>
                <p>
                    First Name:
                    <input type="text" name="firstName" id="" onChange={changeHandler} />
                    { (validState.fullName) ? <p style={{"color": "red"}}>You Must includ a name</p>: null }
                </p>
                <p>
                    Last Name:
                    <input type="text" name="lastName" id="" onChange={changeHandler} />
                    { (validState.fullName) ? <p style={{"color": "red"}}>You Must includ a name</p>: null }
                </p>
                <p>
                    Email:
                    <input type="email" name="email" id="" onChange={changeHandler} />
                    { (validState.email) ? <p style={{"color": "red"}}>Email must be valid</p>: null }
                </p>
                <p>
                    Password:
                    <input type="password" name="password" id="" onChange={changeHandler} />
                    { (validState.password) ? <p style={{"color": "red"}}>Password must have at least 5 chars</p>: null }
                </p>
                <p>
                    Confirm Password:
                    <input type="password" name="confirm_password" id="" onChange={changeHandler} />
                    { (validState.confirmPassword) ? <p style={{"color": "red"}}>Passwords must match</p>: null }
                </p>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Registration