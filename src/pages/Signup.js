import React, { useState, Fragment } from 'react';
import { debounce } from "@material-ui/core";
import {ROUTES} from "../constants/routes";
import {FooterContainer, HeaderContainer} from "../containers";
import {Form} from "../components";
import axios from 'axios'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


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


    const handleSignup = async (e) => {
        e.preventDefault();
        const userInput = {email, name, password, phone}
        try {
            //email check
            const {data, status} = await axios.post("/api/auth/signup", userInput)
            console.log(data);
            if(status === 201) {
                alert(`${data.name} 환영합니다. 회원가입 완료되었습니다. email 확인 해주세요.`)
            }
        } catch (e) {
            console.log(e);
        }
    }

    const responseGoogle = async (response) => {

        try{
           const {data} = await axios.post("/api/google-auth", {token: response.accessToken} )
            console.log(data);
        } catch (e) {
            console.log(e.response)
        }
    }
    const responseFacebook = (response) => {
        console.log(response);
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
                    {/*<GoogleLogin*/}
                    {/*    clientId={"135248623258-98sinnnfelk85ba6tod0p6bl0ggmaljn.apps.googleusercontent.com"}*/}

                    {/*    onSuccess={result => onSuccess(result)}*/}
                    {/*    onFailure={result => console.log(result)}*/}
                    {/*    cookiePolicy={'single_host_origin'}*/}
                    {/*/>*/}
                    <GoogleLogin
                        clientId={"934995609960-2naksvbbepbrj3sjsqpqlks4r5vtmo58.apps.googleusercontent.com"}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />

                    <FacebookLogin
                        appId="288974706516425"
                        autoLoad={true}
                        callback={responseFacebook}
                        fields="name,email,picture"
                    />
                    {/*GOOGLE_AUTH_CLIENT_ID=576753327119-i9c1nu641mopb30hu7lhrncv0fa4oknn.apps.googleusercontent.com*/}
                    {/*GOOGLE_AUTH_CLIENT_SECRET=LxsbzgPfYc6ZQcCLgr4G0NhW*/}
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
