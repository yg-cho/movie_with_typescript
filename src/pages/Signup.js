import React, { useState, Fragment } from 'react';
import { debounce } from "@material-ui/core";
import {ROUTES} from "../constants/routes";
import {FooterContainer, HeaderContainer} from "../containers";
import {Form} from "../components";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [name, setName] =  useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const [isTouched, setIsTouched] = useState({
        email: false,
        phone: false,
        password: false,
        name: false
    });
    const [isAvailable, setIsAvailable] = useState( {
        email: true,
        phone: true
    })
    const [isLoading, setIsLoading] = useState(false);

    const emailInvalid = isTouched.email && email === '';
    const nameInvalid = isTouched.name && name === '';
    const phoneInvalid = isTouched.phone && phone === '';
    const passwordInvalid = isTouched.password && (password.length < 4 || password.length > 40);


    const handleSignup = (e) => {
        e.preventDefault();
        console.log({
            name,
            email,
            password,
            phone
        })
    }

    const checkAvailability = async (value, type) => {};

    return (
        <Fragment>
            <HeaderContainer logoOnly/>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                <Form.FormGroup onSubmit={handleSignup} method={"POST"}>
                    <Form.Input
                        placeholder={"Email"}
                        value={email}
                        onChange={(e) => {
                            if (!isTouched.email){
                                setIsTouched((prevIsTouched) => {
                                    return {...prevIsTouched, email: true};
                                });
                            }
                            debounce(checkAvailability(e.target.value, 'email'))
                            setEmail(e.target.value)

                        }}
                        className={emailInvalid ? 'has-error' : ''}
                    />
                    {emailInvalid && <Form.Error>Please enter an email address.</Form.Error>}
                    {!isAvailable.email && <Form.Error>{email} already taken. Please try another email.</Form.Error>}
                    <Form.Input
                        placeholder={"phone"}
                        value={phone}
                        onChange={(e) => {
                            if (!isTouched.phone){
                                setIsTouched((prevIsTouched) => {
                                    return {...prevIsTouched, phone: true};
                                });
                            }
                            debounce(checkAvailability(e.target.value, 'phone'))
                            setPhone(e.target.value)
                        }}
                        className={phoneInvalid ? 'has-error' : ''}
                    />
                    {phoneInvalid && <Form.Error>Please enter an 11-digit phone number.</Form.Error>}
                    {!isAvailable.phone && <Form.Error>{phone} alerady taken. Please try another number.</Form.Error>}

                    <Form.Input
                        placeholder={"name"}
                        value={name}
                        onChange={(e) => {
                            if (!isTouched.name){
                                setIsTouched((prevIsTouched) => {
                                    return {...prevIsTouched, name: true};
                                });
                            }
                            debounce(checkAvailability(e.target.value, 'name'))
                            setName(e.target.value)
                        }}
                        className={nameInvalid ? 'has-error' : ''}
                    />
                    {nameInvalid && <Form.Error>Please enter your preferred display name.</Form.Error>}

                    <Form.Input
                        placeholder={"password"}
                        value={password}
                        onChange={(e) => {
                            if (!isTouched.password){
                                setIsTouched((prevIsTouched) => {
                                    return {...prevIsTouched, password: true};
                                })
                            }
                            debounce(checkAvailability(e.target.value, 'password'))
                            setPassword(e.target.value);
                        }}
                        className={passwordInvalid ? 'has-error' : ''}
                    />
                    {passwordInvalid && <Form.Error>Your password must contain between 4 and 60 characters.</Form.Error>}
                    <Form.Button type="submit">
                        {isLoading ? 'Signing up...' : 'Sign up'}
                    </Form.Button>
                </Form.FormGroup>
                <Form.Text>
                    Already a user? <Form.Link to={ROUTES.SIGNIN.path}>Sign in now</Form.Link>
                </Form.Text>
            </Form>
            <FooterContainer />
        </Fragment>
    );
};

export default Signup;
