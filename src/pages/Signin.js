import React, {useState, Fragment} from 'react';
import {FooterContainer, HeaderContainer} from "../containers";
import {debounce} from "@material-ui/core";
import {Form} from "../components"
import axios from "axios";

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isTouched, setIsTouched] = useState({
        email: false,
        password: false
    });
    const [isAvailable, setisAvailable] = useState({
        email: true
    })

    const [isLoading, setisLoading] = useState(false);

    const emailInvalid = isTouched.email && email === '';
    const passwordInvalid = isTouched.password && (password.length < 4 || password.length > 40);

    const handleSignin = async (e) => {
        e.preventDefault();
        const userInput = { email, password }
        try
        {
            const {data} = await axios.post("/api/auth/login", userInput)
            console.log(" data :::::",data);
        }
        catch(e){
            console.log(e);
        }


        console.log({
            email,
            password
        })
    }
    const checkAvailability = async (value, type) => {};
    return (
       <Fragment>
           <HeaderContainer logoOnly />
           <Form>
               <Form.Title>Sign In</Form.Title>
               <Form.FormGroup onSubmit={handleSignin} method={"POST"}>
                   <Form.Input
                       placeholder={"Email"}
                       value={email}
                       onChange={(e) => {
                           if (!isTouched.email){
                               setIsTouched((prevIsTouched) => {
                                   return {...prevIsTouched, email: true};
                               })
                           }
                           debounce(checkAvailability(e.target.value, 'email'))
                           setEmail(e.target.value)
                       }}
                       className={emailInvalid ? 'has-error' : ''}
                   />
                   {emailInvalid && <Form.Error>Please enter an email address.</Form.Error>}
                   {!isAvailable.email && <Form.Error>{email} is not found. Please check your email.</Form.Error>}
                   <Form.Input
                       placeholder={"password"}
                       value={password}
                       onChange={(e) => {
                           if (!isTouched.password){
                               setIsTouched((prevIsTouched)=> {
                                   return {...prevIsTouched, password: true};
                               })
                           }
                           debounce(checkAvailability(e.target.value, 'password'))
                           setPassword(e.target.value)
                       }}
                       className={passwordInvalid ? 'has-error' : ''}
                   />
                   {passwordInvalid && <Form.Error>Please enter an 11-digit phone number.</Form.Error>}
                   <Form.Button type="submit">
                       {isLoading ? 'Signing in...' : 'Sign In'}
                   </Form.Button>
               </Form.FormGroup>
           </Form>
           <FooterContainer />
       </Fragment>
    );
};

export default Signin;
