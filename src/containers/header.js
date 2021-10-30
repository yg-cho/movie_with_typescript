import React,{ useState, useEffect } from 'react';
import { Header } from '../components'
import {ROUTES} from "../constants/routes";

const HeaderContainer = ({ logoOnly }) => {
    const [isShown, setIsShown] = useState(false);
    const isLoggedIn = false;
    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 100) {
                setIsShown(true);
            } else {
                setIsShown(false);
            }
        }
        window.addEventListener('scroll',scrollListener);
        return () => {
            window.removeEventListener('scroll',scrollListener);
        }
    }, []);

    return (
        <Header className={ isShown ? "opaque" : ''}>
            <Header.Panel>
                <Header.Logo className={!isLoggedIn ? 'large' : ''} src="/images/branding/img.png" alt="Netflix_Logo" to={ROUTES.HOME.path}/>
                {isLoggedIn &&(
                    <Header.Nav>
                        <Header.NavLink href={"#"}>Home</Header.NavLink>
                        <Header.NavLink href={"#"}>Browse</Header.NavLink>
                        <Header.NavLink href={"#"}>MyList</Header.NavLink>
                        <Header.NavLink href={"#"}>Browse</Header.NavLink>
                    </Header.Nav>
                )}
            </Header.Panel>
            {!logoOnly && (
                isLoggedIn
                ? <Header.Avatar src={"/images/avatars/Avatar_01.png"}/>
                : <Header.Button to={ROUTES.SIGNIN.path}>Sign in</Header.Button>
            )}
        </Header>
    );
};

export default HeaderContainer;
