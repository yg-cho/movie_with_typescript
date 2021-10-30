import React from 'react';
import { Footer } from "../components";
import footerItems from "../fixtures/footer.json"


const FooterContainer = () => {
    return (
        <Footer>
            <Footer.Title>Questions? Contact us.</Footer.Title>
            <Footer.Menu>
                {footerItems.map(item => (
                    <Footer.MenuItem key={item.id}>
                        <Footer.Link href={item.url}>{item.text}</Footer.Link>
                    </Footer.MenuItem>
                ))}
            </Footer.Menu>
            <Footer.Text>Netflix Korea</Footer.Text>
        </Footer>
    );
};

export default FooterContainer;
