import React from 'react';
import { Header } from '../components'


const HeaderContainer = () => {
    return (
        <Header className="opaque">
            <Header.Panel>
                <Header.Logo className="large" src="/images/branding/img.png" alt="Netflix_Logo"/>
            </Header.Panel>
        </Header>
    );
};

export default HeaderContainer;
