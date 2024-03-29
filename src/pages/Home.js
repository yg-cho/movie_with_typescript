import React from 'react';
// import FeatureContainer from "../containers/feature";
// import FooterContainer from "../containers/footer";
// import FaqContainer from "../containers/faqs"
// import BannerContainer from "../containers/banner";
// import HeaderContainer from "../containers/header"
import {HeaderContainer, FooterContainer, BannerContainer, FeatureContainer, FaqContainer} from "../containers";

const Home = () => {
    return (
        <div>
            <HeaderContainer/>
            <BannerContainer/>
            <FeatureContainer/>
            <FaqContainer/>
            <FooterContainer/>
        </div>
    );
};

export default Home;
